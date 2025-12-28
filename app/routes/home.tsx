import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "../../constants/ResumeCard";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ThugResume" },
    { name: "description", content: "Welcome to AI Resume Analyzer!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.jpg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Crack Your Resume Before Interviewer Crack it!</h1>
        <h2>Upload your resume and let our AI analyze it for you</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
  </main>
}
