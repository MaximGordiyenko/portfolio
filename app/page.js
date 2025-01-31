"use client";
import { Intro } from '@/components/Intro';
import { Skills } from '@/components/Skills';
import { Who } from '@/components/Who';
import { Projects } from '@/components/Projects';
import { Hobby } from '@/components/Hobby';
import { data } from '@/data/data';
import "../styles/globals.css";

export default function Page() {
  
  return (
    <div className="root-page">
      <Intro characters={data.characters}/>
      <Who data={data}/>
      <Skills skills={data.skills}/>
      <Projects projects={data.projects}/>
      <Hobby hobby={data.hobby}/>
    </div>
  );
}
