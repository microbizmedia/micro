// src/app/api/apply/route.ts
import { sendEmail } from '@/app/utils/mailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const positionName = formData.get('positionName')?.toString() || '';
    const candidateName = formData.get('candidateName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const location = formData.get('location')?.toString() || '';
    const yearsOfExperience = formData.get('yearsOfExperience')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const resumeFile = formData.get('resume') as Blob | null;

    // Required field check
    if (!candidateName || !email || !resumeFile) {
      return new Response(
        JSON.stringify({ error: 'Name, email and resume are required.' }),
        { status: 400 }
      );
    }

    // File size check (5MB max)
    const fileSize = resumeFile.size;
    if (fileSize > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: 'File size must be less than 5MB.' }),
        { status: 413 }
      );
    }

    // Convert file to Node Buffer
    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    // Send email
    await sendEmail(
      'martinstojmenovskim@gmail.com', // Replace with your email
      `New Job Application: ${positionName}`,
      `Name: ${candidateName}\nEmail: ${email}\nLocation: ${location}\nYears of Experience: ${yearsOfExperience}\nMessage: ${message}`,
      { filename: (resumeFile as any).name || 'resume.pdf', content: buffer }
    );

    return new Response(JSON.stringify({ message: 'Application sent successfully!' }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
