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

    if (!candidateName || !email || !resumeFile) {
      return new Response(
        JSON.stringify({ error: 'Name, email and resume are required.' }),
        { status: 400 }
      );
    }

    const fileSize = resumeFile.size;
    if (fileSize > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: 'File size must be less than 5MB.' }),
        { status: 413 }
      );
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    // Determine filename without using 'any'
    let filename = 'resume.pdf';
    if ('name' in resumeFile && typeof (resumeFile as File).name === 'string') {
      filename = (resumeFile as File).name;
    }

    await sendEmail(
      'martinstojmenovskim@gmail.com',
      `New Job Application: ${positionName}`,
      `Name: ${candidateName}\nEmail: ${email}\nLocation: ${location}\nYears of Experience: ${yearsOfExperience}\nMessage: ${message}`,
      { filename, content: buffer }
    );

    return new Response(JSON.stringify({ message: 'Application sent successfully!' }), { status: 201 });
  } catch (err) {
    console.error('Email sending failed:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
