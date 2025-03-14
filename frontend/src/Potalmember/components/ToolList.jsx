import { useState } from "react";
import { FaBook, FaBrain, FaGamepad, FaPodcast, FaClipboardCheck, FaChessBoard, FaShip, FaMusic, FaReadme, FaAngry, FaBed, FaTired, FaBalanceScale, FaRegCircle, FaJournalWhills, FaMoon, FaChair } from "react-icons/fa";
import { GiMeditation, GiSnake } from "react-icons/gi"; // ✅ เปลี่ยน FaSnake เป็น GiSnake
import ToolCard from "./ToolCard";
import ToolDetail from "./ToolDetail";

const tools = [
  {
    title: "Journaling",
    description: "Boost self-awareness and emotional regulation by reflecting on thoughts and feelings, leading to reduced stress and improved coping mechanisms.",
    icon: <FaBook className="text-4xl text-blue-600" />,
    details: null,
  },
  {
    title: "Relaxation & Grounding",
    description: "Cultivate inner peace and reduce anxiety by practicing techniques that calm the mind and body, fostering a sense of presence and stability.",
    icon: <GiMeditation className="text-4xl text-green-600" />,
    details: null,
  },
  {
    title: "Games",
    description: "Enhance cognitive function, problem-solving skills, and emotional resilience through engaging gameplay that provides a healthy distraction and promotes positive emotions.",
    icon: <FaGamepad className="text-4xl text-red-600" />,
    details: [
      {
        name: "Connect 4",
        description: "Improves strategic thinking and planning, valuable for workplace problem-solving.",
        link: "https://papergames.io/en/r/GWkhVFmti",
        icon: <FaChessBoard className="text-3xl text-purple-600" />,
      },
      {
        name: "Battleship",
        description: "Provides a focused distraction that can help clear the mind and reduce stress.",
        link: "https://papergames.io/en/battleship",
        icon: <FaShip className="text-3xl text-blue-600" />,
      },
      {
        name: "Snakes",
        description: "Snakes can be good for mindless distraction, offering a simple and engaging way to unwind and temporarily shift focus away from stressors.",
        link: "https://snake.io/",
        icon: <GiSnake className="text-3xl text-green-600" />, // ✅ ใช้ GiSnake แทน FaSnake
      },
      {
        name: "Rhythm Game",
        description: "Rhythm games can be good for both mood boosting and improving focus and coordination.",
        link: "https://pulsus.cc/play/",
        icon: <FaMusic className="text-3xl text-yellow-600" />,
      },
    ],
  },
  {
    title: "Psychoeducation",
    description: "Empower yourself with knowledge about mental health, enabling you to better understand your own experiences and seek appropriate support when needed.",
    icon: <FaBrain className="text-4xl text-purple-600" />,
    details: null,
  },
  
  {
    title: "Positive Podcasts & Audio",
    description: "Uplift your mood, gain new perspectives, and reduce negative thoughts by listening to inspiring content that promotes optimism and well-being.",
    icon: <FaPodcast className="text-4xl text-yellow-600" />,
    details: null,
  },
  {
    title: "Assessment & Quizzes",
    description: "Gain valuable insights into your strengths and areas for growth, empowering you to make informed decisions about your mental health and personal development.",
    icon: <FaClipboardCheck className="text-4xl text-teal-600" />,
    details: null,
  },
  {
    title: "Readings",
    description: "Explore insightful articles and resources to enhance your knowledge and mental well-being.",
    icon: <FaReadme className="text-4xl text-indigo-600" />,
    details: [
        {
            name: "Anger Management",
            link: "https://www.clairenewton.co.za/my-articles/making-sense-of-anger.html",
            additionalLink: "https://www.clairenewton.co.za/posters-worksheets/anger-iceberg-model.html",
            icon: <FaAngry className="text-3xl text-red-600" />,
          },
          {
            name: "Insomnia",
            link: "https://workplacementalhealth.org/mental-health-topics/insomnia",
            icon: <FaBed className="text-3xl text-blue-600" />,
          },
          {
            name: "Workplace Burnout",
            link: "https://www.apa.org/topics/healthy-workplaces/workplace-burnout",
            icon: <FaTired className="text-3xl text-gray-600" />,
          },
          {
            name: "Work-life Balance",
            link: "https://www.ccohs.ca/oshanswers/psychosocial/worklife_balance.html",
            icon: <FaBalanceScale className="text-3xl text-green-600" />,
          },
          {
            name: "Circle of Concern",
            link: "https://www.clairenewton.co.za/posters-worksheets/circle-of-control-poster.html",
            icon: <FaRegCircle className="text-3xl text-yellow-600" />,
          },
          {
            name: "Gratitude Journaling",
            link: "https://theresilienceproject.com.au/at-home/wellbeing-hub/gratitude-and-the-benefits-of-journaling/",
            icon: <FaJournalWhills className="text-3xl text-purple-600" />,
          },
          {
            name: "Sleep Hygiene",
            link: "https://www.sleepfoundation.org/sleep-hygiene",
            icon: <FaMoon className="text-3xl text-blue-500" />,
          },
          {
            name: "Office Ergonomics",
            link: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/office-ergonomics/art-20046169",
            icon: <FaChair className="text-3xl text-brown-600" />,
          },
    ],
  },
];

export default function ToolList() {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="bg-[#F2ECE7] min-h-screen p-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#F7BEB7] mb-8 tracking-wide">Tools (Also Appearing on Homepage)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            tool={tool}
            isSelected={selectedTool === index}
            onClick={() => setSelectedTool(selectedTool === index ? null : index)}
          />
        ))}
      </div>

      {/* ✅ แสดงรายละเอียดเมื่อเลือก */}
      {selectedTool !== null && <ToolDetail tool={tools[selectedTool]} />}
    </div>
  );
}