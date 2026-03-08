import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, date, time, guests, bookingId } = await req.json();

    if (!name || !email || !date || !time || !guests || !bookingId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const formatDate = (dateStr: string) => {
      try {
        return new Date(dateStr).toLocaleDateString("en-IN", {
          weekday: "long", day: "numeric", month: "long", year: "numeric",
        });
      } catch {
        return dateStr;
      }
    };

    const formatTime = (timeStr: string) => {
      try {
        const [h, m] = timeStr.split(":");
        const hour = parseInt(h);
        return `${hour > 12 ? hour - 12 : hour}:${m} ${hour >= 12 ? "PM" : "AM"}`;
      } catch {
        return timeStr;
      }
    };

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlContent = `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #faf6f1; padding: 40px 20px;">
        <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: hsl(25, 65%, 28%); font-size: 28px; margin: 0;">🍽️ Table Reserved!</h1>
            <p style="color: hsl(25, 10%, 45%); margin-top: 8px;">Your booking has been confirmed</p>
          </div>
          <div style="background: hsl(35, 25%, 90%); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: hsl(25, 10%, 45%); font-size: 14px;">Booking ID</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold; color: hsl(25, 65%, 28%); font-family: monospace;">${bookingId}</td>
              </tr>
              <tr><td colspan="2" style="border-top: 1px solid hsl(30, 15%, 88%); padding: 4px 0;"></td></tr>
              <tr>
                <td style="padding: 8px 0; color: hsl(25, 10%, 45%); font-size: 14px;">👤 Guest</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: hsl(25, 20%, 15%);">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: hsl(25, 10%, 45%); font-size: 14px;">📅 Date</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: hsl(25, 20%, 15%);">${formatDate(date)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: hsl(25, 10%, 45%); font-size: 14px;">🕐 Time</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: hsl(25, 20%, 15%);">${formatTime(time)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: hsl(25, 10%, 45%); font-size: 14px;">👥 Guests</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: hsl(25, 20%, 15%);">${guests} ${parseInt(guests) === 1 ? "Guest" : "Guests"}</td>
              </tr>
            </table>
          </div>
          <p style="text-align: center; color: hsl(25, 10%, 45%); font-size: 13px;">
            Please save your Booking ID for reference. We look forward to serving you!
          </p>
          <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid hsl(30, 15%, 88%);">
            <p style="color: hsl(25, 10%, 45%); font-size: 12px; margin: 0;">FreshBite Café</p>
          </div>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FreshBite Café <onboarding@resend.dev>",
        to: [email],
        subject: `Table Reservation Confirmed - ${bookingId}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, emailId: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
