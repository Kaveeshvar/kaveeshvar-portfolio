import Container from "./Container";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </div>
        <div className="flex gap-4 text-sm">
          <a className="hover:underline" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:underline" href={profile.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:underline" href={`mailto:${profile.contact.email}`}>
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
