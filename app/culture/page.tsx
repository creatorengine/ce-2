"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./culture.css";
const Page = () => {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-900 text-[#DADADA] overflow-x-hidden">
      <div className="m-0 p-0">
        <img src="/banner/banner2.png" alt="" />
      </div>
      <div className="container mx-auto mt-16 px-16 py-8">
        <h1 className="text-2xl font-bold gradient-text mb-8">
          CULTURE : CREATIVE OWNERSHIP
        </h1>

        <section className="mb-12">
          <p className="mb-4">
            We are a team that helps creators around the world make great
            content. Therefore, it is important that we also thrive in a culture
            that empowers creativity, drives innovation, and nurtures
            collaboration in this fast-changing world. That said, we also
            acknowledge that we are not robots. We celebrate our achievements
            and embrace our gaps as opportunities for growth and learning.
          </p>
          <p>
            This document emerges as a living, breathing guide, evolving with us
            and the world around us. It acknowledges that our culture is
            dynamic, adapting alongside us. It took us about a year and a half
            to live through the wins and challenges, find opportunities to learn
            from them, and finally structure them into this document that
            captures the essence of what it means to be part of 'Creator
            Engine'.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Ownership & Accountability
          </h2>
          <p className="mb-4">
            We take responsibility for our actions and their outcomes. Each team
            member is empowered to take initiative and make decisions, owning
            both successes and mistakes. Accountability fosters trust, and trust
            is the bedrock of our collaborative efforts.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Identify Tasks Proactively: Look for tasks that need attention and
              start working on them without waiting for an assignment.
            </li>
            <li>
              Follow Through: Commit to your deadlines and deliverables. Ensure
              that once you start a task, you see it through to completion.
            </li>
            <li>
              Track Your Progress: Regularly update your progress and ensure
              your tasks are moving forward as planned.
            </li>
            <li>
              Flag Concerns Early: If you encounter a problem or struggle with a
              task and if it is time-sensitive, seek help and raise an early
              flag rather than losing time trying to figure it out yourself.
            </li>
            <li>
              Admit and Learn from Mistakes: If you make a mistake, acknowledge
              it, learn from it, and implement steps to avoid repeating it.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Alignment & Engagement
          </h2>
          <p className="mb-4">
            Ensuring that all team members are working towards the same business
            goals is crucial. Alignment means that our efforts are coordinated
            and synergistic, maximizing our impact and fostering a cohesive,
            united team. We recognize the importance of building strong
            relationships with our clients and stakeholders. By fostering
            regular, meaningful interactions, seeking and giving feedback, we
            ensure that everyone feels connected, valued, and engaged in the
            creative journey.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Participate Actively: Engage in team meetings and discussions to
              align with team and project goals.
            </li>
            <li>
              Communicate Regularly: Keep your team/clients updated with regular
              status reports and progress updates.
            </li>
            <li>
              Seek Feedback: Regularly ask clients/teammates for their input and
              incorporate their feedback into your work.
            </li>
            <li>
              Offer Feedback: Offer constructive feedback to all team members at
              any level regularly.
            </li>
            <li>
              Celebrate Successes: Recognize and celebrate team and individual
              achievements to boost morale.
            </li>
            <li>
              Build Relationships: Invest time in getting to know your
              colleagues and clients to build trust and rapport.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Clarity</h2>
          <p className="mb-4">
            Clear communication and transparent processes are essential to build
            alignment. We strive for clarity in our goals, roles, and
            expectations, ensuring everyone understands their contributions and
            how they fit into the bigger picture. This clarity drives focus and
            efficiency.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Set Common Goals that Align with Business Needs: Collaborate with
              your team/immediate manager to set specific, measurable goals for
              each project/role and keep tracking your progress.
            </li>
            <li>
              Provide/Seek Clear Instructions: When assigning or taking on a
              task, give/seek clear, detailed instructions to avoid
              misunderstandings. Avoid jargon and use simple, straightforward
              language in communications. Align on expectations for deadlines
              and deliverables.
            </li>
            <li>
              Seek Context: Understanding the full context of your work is
              crucial. Promote clarity by urging everyone to ask questions and
              push for comprehensive information from clients/teammates.
              Feedback from a client/teammate might differ from what we presume.
              Seeking context in those times helps us align better and get
              clarity.
            </li>
            <li>
              Document Processes: Maintain clear documentation of workflows and
              procedures/checklists for reference. Maintaining learning docs for
              clients often helps in reducing recurring feedback.
            </li>
            <li>
              Be Transparent: Share information openly with your team to avoid
              confusion and build trust.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Care</h2>
          <p className="mb-4">
            We care deeply about our clients and our colleagues. This care
            translates into a supportive environment where clients' time,
            release schedules, and quality standards are never compromised. For
            our colleagues, well-being is prioritized and everyone is encouraged
            to bring their authentic selves to work. We believe that a caring
            environment fuels creativity and innovation.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Be Selfless: Keep our clients' / colleagues' / business needs
              first in everything you do at Creator Engine.
            </li>
            <li>
              Show Empathy: Be empathetic towards clients and colleagues,
              understanding their needs and concerns.
            </li>
            <li>
              Prioritize Quality: Always prioritize delivering high-quality work
              that meets or exceeds client expectations.
            </li>
            <li>
              Respect Deadlines: Be mindful of deadlines and plan your work to
              meet them without compromising quality.
            </li>
            <li>
              Support Well-being: Promote a healthy work-life balance and
              support colleagues' well-being.
            </li>
            <li>
              Offer Help: Offer assistance to colleagues who may be struggling
              with their workload.
            </li>
            <li>
              Respect Diversity: Value and respect the diverse backgrounds and
              perspectives of your colleagues.
            </li>
            <li>
              Foster Inclusivity: Create an inclusive environment where everyone
              feels valued and heard.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Future Ready
          </h2>
          <p className="mb-4">
            We are committed to staying ahead of the curve, embracing new
            technologies, and adapting to changing trends. Being future-ready
            means continuously learning, experimenting, and evolving to meet the
            needs of tomorrow's creators and audiences.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Stay Informed: Keep up with industry trends, emerging technologies
              and artificial intelligence.
            </li>
            <li>
              Experiment with Tools: Try out new tools and techniques to enhance
              productivity and creativity.
            </li>
            <li>
              Share Knowledge: Share new insights and learnings with your team
              to collectively stay updated.
            </li>
            <li>
              Be Adaptable: Be open to change and willing to adjust your
              approach as needed.
            </li>
            <li>
              Build Skills: Continuously work on building new skills that will
              be valuable in the future.
            </li>
            <li>
              Network: Connect with industry professionals to learn about new
              developments and opportunities.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Over & Above
          </h2>
          <p className="mb-2">
            At Creator Engine, “Over & Above” is more than a work ethic; it’s a mindset that we lean on every day. It’s the drive to look beyond instructions, own every outcome, and elevate every project with care. We don’t just meet expectations; we rise beyond them. It’s the spirit that transforms good work into great impact and individual effort into collective excellence.
          </p>
          <p className="mb-4">We go Over & Above when we:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Think beyond “my tasks” and connect our work to the bigger picture.
            </li>
            <li>
              Find smarter, more efficient, innovative ways to deliver outstanding quality.
            </li>
            <li>
              Take ownership of outcomes, not just deliverables.
            </li>
            <li>
              Elevate teammates by sharing knowledge, feedback, and solutions.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="mb-8">
            As we continue to grow and evolve, our commitment to these values
            remains unwavering. By embracing Ownership & Accountability,
            Clarity, Care, Alignment & Engagement, and being Future Ready, we
            cultivate a culture of continuous improvement. We strive to
            understand the full context in everything we do, actively seek
            feedback, and express our ideas openly. We aim to build strong,
            indispensable relationships, approach every project with a
            competitive spirit, and constantly think like creators, staying
            adaptable and innovative in this dynamic landscape.
          </p>
          <p className="mb-8">
            This culture memo is more than just words on a page; it is a
            reflection of who we are and who we aspire to be. To encapsulate our
            culture, we draw inspiration from George Bernard Shaw, who said:
          </p>
          <blockquote className="lg:text-xl  text-center italic gradient-text mb-8">
            "You see things; and you say 'Why?'
            <br /> But I dream things that never were; and I say 'Why not?'"
          </blockquote>
          <p>
            At Creator Engine, we embrace change and actively shape it. We stay
            ahead of trends by setting new ones. Most importantly, we don't just
            envision the future; we work to bring it to life.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Page;
