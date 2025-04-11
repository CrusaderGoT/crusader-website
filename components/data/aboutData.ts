import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const myAge = () => {
    const birthDate = dayjs("1999-8-29");
    const now = dayjs();

    // Calculate full years difference
    const years = now.diff(birthDate, "year");

    // Subtract the years to calculate months
    const months = now.diff(birthDate.add(years, "year"), "month");

    // Subtract years and months to calculate days
    const days = now.diff(
        birthDate.add(years, "year").add(months, "month"),
        "day"
    );
    const age = { years, months, days };
    return age;
};

const age = myAge();

export const aboutMe = `
My name is Enemchukwu Chukwuemeka Alexander Afamefuna.\n\
Born on August 29th, 1999, I am currently ${age.years} years, ${age.months} months, and ${age.days} days Old.\n\
Now my life has been eventful, mostly filled with unfortunate circumstances 😅, but hey, whose life hasn't been? So I won't tell you the pitiful aspects of my life, because that would be morbid. 🙈\n\
Rather, I will gist you about the more technical aspects, because like everybody else, you are here to see if I am a good fit for whatever programming project you are on. 💼\n\
\n\
I will begin by saying I have always loved the concept of coding—speaking to machines with intricate languages and getting them to do stuff for you. 👩‍💻💡\n\
My passion for Python is undeniable, and I've embraced both backend and frontend development. I follow best practices and enjoy working with a variety of libraries and technologies, including FastAPI and Django for web development. 🚀🐍\n\
\n\
Technology (phones) was one of my earliest fascinations. I would tinker with my mom's phone to learn every intricate detail 📱, even though it often ended with me being scolded. 😇\n\
Now, I haven't always wanted to be a programmer. My first vocation of choice was to be a nurse, but I was swiftly discouraged from that by my mom after she told me my job would be to pack literal shit all day 🤢—and I don't want to do that. So for the longest time, I was unsure of what I wanted to be. Whenever I was asked, I would just answer "I will be an Engineer," even though I didn't really know what engineers did. 🤷‍♂️\n\
Until I had to take exams for university entrance and pick a particular type of engineering, I told myself I would pick civil engineering because I believed they made houses 🏗️ (though till today, I am not entirely sure if that is true). When the time came, after some self-reflection on my talent and passion, I applied for Computer Science. My university of choice wasn't offering Computer Engineering—stupid, I know—but Computer Science was the next best thing, according to my research (Googling for 5 minutes). 🔍\n\
\n\
I settled for my second choice: Information Management Technology (IMT for short). On paper, IMT was pretty neat—you learn how phones work, build satellites, etc. 🚀📡 All that really dope stuff I only saw in movies, but the reality was disappointing, mainly because the school turned out to be an outright government-sponsored scam. 😞 I would get into details, but that would be revealing an unfortunate circumstance, and I agreed I wouldn't do that. 🤐\n\
\n\
School came and went—supposed to be 5 years, ended up being 7 years. 🎓⌛ Once I was out, I felt a release of pressure and tension, like a fog in my mind had cleared, and I could suddenly think clearly. 🌥️➡️☀️ This was when my programming journey began.\n\
After a bit of research, I decided Python was the first language I would learn. 🐍 Now, you may be wondering why I made the decision to learn programming; honestly, I don't remember. I believe it was a mix of purpose, money, and the course I studied in school. 💭💰\n\
And so it began, my first hello world. I was ecstatic. 😃 I learned Python fairly easily, covering all the basics and even undertaking projects in its various niches. During that phase, I experimented with a wide array of libraries—using Numpy and Scipy for scientific computing, Matplotlib for data visualization, Pillow for image processing, Librosa for audio analysis, and Moviepy for video editing. 🧮📈🎨🔊🎞️\n\
I also explored frontend development with HTML, CSS, and modern frameworks like TailwindCSS, Bootstrap5, ShadCN UI, and Mantine. 💻🎶📊🖼️🎥\n\
Then, for a short while, I became a tech vagabond—dabbling in various libraries that often had little to do with each other—simply because I believed they were the next steps after mastering the basics. Eventually, I settled on the web development niche using Django. 🌐\n\
I further honed my skills by building RESTful APIs with FastAPI and Django REST framework, and I'm continuously expanding my expertise in JavaScript, Next.js, and modern web development tools. 🌱✨\n\
\n\
Then came the job hunt—the ruthless chase for approval and money in an industry where rejection becomes the norm, and every opportunity makes you feel like you haven't even begun to scratch the surface of this vast knowledge base. 💼😓\n\
With the emergence of proper AI, the machines I was once going to command started dictating terms to me. 🤖 In all, it became daunting, but I enjoy what I do—or at least that's what I tell myself. 😎\n\
Recently, I've worked on projects like an API for The Culling Games leveraging FastAPI and Next.js, dynamic portfolio websites to showcase my skills, and systems utilizing Alembic for database migrations with SQLAlchemy/SQLModel for ORM. 💡🛠️\n\
\n\
Apart from programming, I have a passion—a legacy I want even more. My friend John Duke introduced me to anime when I was 12 years old, sparking an imagination for fantasy. 🎌✨ Even before that, I always had a wild imagination, but I never really gave it much thought (see what I did there). 😉\n\
As time went by, I fell in love with writing stories—tales of brutality, human nature, twists, etc. That is the legacy I want to leave behind when all is said and done; my stories to be read a hundred years from now. 📚🖋️\n\
I put societal demands first, and it dulled my imagination, but as every successful person would say, you just have to be consistent and put in the work (they better not have been lying). 💪 So that is still my ultimate dream: to finish my stories and to travel the world. 🌍✈️ I believe freedom breeds creativity, and whoever can go anywhere in the world is the freest person. \n\
I also aspire to dive deeper into cloud technologies like AWS, explore containerization with Docker, enhance my knowledge in AI and machine learning, and expand into automation and scripting. 🔭🤖\n\
\n\
If you made it this far, thanks (and you better hire me). 🙏\n\
Hope to hear from you; go to the contact page to see how to reach me. 📫\n\
- CrusaderGoT
`;

const aboutMeOriginal = `
    My name is Enemchukwu Chukwuemeka Alexander Afamefuna.\n
    Born on August 28th 1999, I am currently {myAge()} Years Old.\n
    Now my Life has been eventfully, mustly of unfortunate circumstances, but hey whose life hasn't. So i won't tell you the pitiful aspects of my life, because that would be morbid.\n
    Rather I will gist you about the more technical aspects, because like everybody else, you are here to see if I am a good fit for whatever programming project you are on.\n
    I will begin with saying I have always loved the concept of coding, speaking to machines with intricate languages, and getting them to do stuff for you.\n
    Technology (Phones) were one of my earliest facinations, i would tinker with my Mom's phone, to know every intricate details about, which often ended with me being scolded at.\n
    Now I haven't always wanted to be a programmer. My first vocation of choice was to be a nurse, but i was swifly discourage from that by my Mom, after she told me my job would be to pack shit, literal shit allday, and i don't wanna do that. So for the longest time, i was sure what i wanted to be. Whenever I was asked I would just answer "I will be an Engineer", even though i didn't really know waht engineers did. Until I had to take exams for university entrance, and i had to pick a particular type of engineering, i told myself i would pick civic engineering, because i believed they made houses (till today i am sure if that is true). When the time came, after some self reflection on my talent and passion, i put in for Computer Science, my university of choice wasn't offering Computer Engineering, stupid i Know, but Computer Science was the next best thing, according to my research (Googling for 5 mins). I ended up not getting the course.\n
    I settled for my second choice Information Management Technology, IMT for short. Now IMT on paper was pretty neat, you learn how phones work, build satlites, etc. All those really dope stuff i only saw in Movies, but the realiy of it was trash. Majorly becuase the school was an outrigth goverment sponsored scam. I would get into details, but that would be telling an unfortuante circumstance, and i agreed i won't do that.\n
    School came and went, supposed to be 5 years, ended up being 7 years. Once i was out, i felt a release of pressure and tension, like a fog in my mind had cleared, and i could suddenly think cleary. This was when my programming journey began.\n
    After a few research, i decided python was the first language i would learn. Now you may be wondering why i made the decision to learning programming, honestly i don't remember. I do belive it was something of a mix of purpose, money, and the course i studied in schoool.\n
    And so it began, my first hello world. I was estatic. I learnt python pretty easy and slow, covered all the basic and even did projects on some of its various niche. Then for a short while i became a tech vagabon, which is when you learn various libraries, that have little or nothing to do with each other, because you think they are the next steps after the basics, and you need to know them all. Eventaully i settled on the web developement niche using Django. Then came the job hunt, the ruthless chasing of approval and money in your industry, where rejection becomes per course, and every chance makes you feel you haven't even began to scratch the surface of this vast knowledge code base. Add that to the emergence of proper AI, the machines i was going to tell waht to do, were now telling me waht to do. In all it became daunting, but i enjoy what i do, or atleast that's what i tell myself.\n
    Apart from Programming I have a passion, a legacy i want moreso. My friend John Duke Introduced to Anime, when I was 12 years old, and i sparked in me an imagination for the fantasy. Even before that i always had a wild imagination, but i never really gave it much thought (see what i did there).\n
    As time went i feel in love with writing stories, fantasy of brutality, human nature, twists, etc. And that is the legacy i want to leave behind when all is said and done, my stories, to be read a hundred years from now. I put societal demand first, and it dulled my imagination, but like every successfull person would say, you just have to be consistent, put in work (they better not have been lying). So that is my still my ultimate dream, to finish my stories, and to trvel the world. Because i belive freedom breeds creativity, and whoever can go to anywhere in the world is the freeest person. And that is what i believe to be my calling, with a side quest of being a programmer.

    If you made it this far, Thanks (and you better hire me).\n
    Hope to here from you, go to the contact page to see how to reach me.
    - CrusaderGoT

`;
