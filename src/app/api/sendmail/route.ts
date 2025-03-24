import { send, setApiKey } from '@sendgrid/mail';

export async function POST(request: Request) {
    const sendgridApiKey: string | undefined = process.env.SENDGRID_API_KEY;
    const verifiedFromEmailAddress: string | undefined = process.env.VERIFIED_FROM_EMAIL;

    if (!sendgridApiKey || !verifiedFromEmailAddress) {
        return new Response(JSON.stringify({ error: 'No API key provided.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    setApiKey(sendgridApiKey);

    try {
        const { name, email, message } = await request.json();

        const msg = {
            to: verifiedFromEmailAddress,
            from: email,
            subject: "Wiadomośc od " + name,
            text: message,
            html: message
        };

        await send(msg);

        return new Response(JSON.stringify({ message: 'E-mail wysłany pomyślnie' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Błąd podczas wysyłania e-maila:', error);
        return new Response(JSON.stringify({ error: 'Błąd wysyłki e-maila' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
