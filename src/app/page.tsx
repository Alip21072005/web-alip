"use client";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function Beranda() {
  return (
    <div className="flex justify-end items-start min-h-screen pt-10 pr-25">
      <ProfileCard
        name="Alip Maulana"
        title="Web Developer"
        handle="_alip.pppp"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/images/alip.jpg"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
}
