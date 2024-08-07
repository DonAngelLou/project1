import Image from 'next/image';
import { Button } from '../components/ui/Button'; // Ensure Button component is correctly imported

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative w-full h-64">
        <Image
          src="/images/service1.png" // Add your cover photo here
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute top-4 left-4 flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-lg font-bold">zwifftech.com</span>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Image src="/images/profile-pic.jpg" alt="Profile Picture" width={96} height={96} className="rounded-full border-4 border-black" />
        </div>
      </header>
      <main className="pt-16 p-6">
        <section className="text-center mb-10">
          <h1 className="text-2xl font-bold mt-4 text-green-500">Don Angel Lou Salvatierra</h1>
          <p>CEO</p>
          <p className="text-gray-400">Example.company@gmail.com</p>
          <p className="text-gray-400">+639123456789</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#"><Image src="/images/email-icon.png" alt="Email" width={24} height={24} /></a>
            <a href="#"><Image src="/images/phone-icon.png" alt="Phone" width={24} height={24} /></a>
            <a href="#"><Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} /></a>
            <a href="#"><Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} /></a>
          </div>
          <div className="mt-6">
            <Button className="bg-blue-500 text-white py-2 px-4 rounded">Email Me</Button>
            <Button className="ml-4 border border-white text-white py-2 px-4 rounded">Save Contact</Button>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-green-500">Profit Pioneer</h2>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Company Background</h3>
            <p className="text-gray-400 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <p className="text-gray-400 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image src="/images/service1.jpg" alt="Service 1" width={200} height={200} />
              <Image src="/images/service2.jpg" alt="Service 2" width={200} height={200} />
              <Image src="/images/service3.jpg" alt="Service 3" width={200} height={200} />
              <Image src="/images/service4.jpg" alt="Service 4" width={200} height={200} />
            </div>
          </div>
        </section>
      </main>
      <footer className="p-6 text-center bg-black text-white">
        <p>© 2024 Zwifftech. All Rights Reserved.</p>
        <p>Profit Pioneer</p>
      </footer>
    </div>
  );
}
