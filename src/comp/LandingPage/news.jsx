import { useState } from "react";
import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 7,
    date: "Nov 2026",
    description: (
      <>
        Our paper &quot;<em>Occlusion for Free: Detecting Occlusion from the Disagreement Between Two Monocular Distance Cues</em>&quot; was accepted at the GlobalSouthAI Workshop @ NeurIPS 2026, and will be presented as a poster on Dec 10, 2026.{" "}
        <a href="https://arxiv.org/abs/2611.06899" target="_blank" rel="noopener noreferrer">[arXiv]</a>
      </>
    ),
  },
  {
    id: 6,
    date: "Sept 2026",
    description: (
      <>
        Our paper on real-time maize leaf disease detection using Raspberry Pi 5 and YOLOv8 was published in <em>Tehnički glasnik</em>.{" "}
        <a href="https://doi.org/10.31803/tg-20240919073402" target="_blank" rel="noopener noreferrer">[DOI]</a>
      </>
    ),
  },
  {
    id: 5,
    date: "June 2026",
    description: (
      <>
        Our poster &quot;<em>A Stone Against Goliath: Addressing Occlusion Without LiDAR on Resource-Constrained Robots</em>&quot; was accepted at the WiML Symposium @ ICML 2026.{" "}
        <a href="/posters/2026_ICML-WiML_Stone-Against-Goliath_Poster.pdf" target="_blank" rel="noopener noreferrer">[Poster]</a>{" "}
        <a href="https://icml.cc/virtual/2026/76538" target="_blank" rel="noopener noreferrer">[ICML]</a>
      </>
    ),
  },
  {
    id: 4,
    date: "April 2026",
    description: (
      <>
        Our paper on attention-enhanced YOLOv8 for crack detection and segmentation was published in the <em>Kurdistan Journal of Applied Research</em>.{" "}
        <a href="https://doi.org/10.24017/science.2026.1.9" target="_blank" rel="noopener noreferrer">[DOI]</a>
      </>
    ),
  },
  {
    id: 3,
    date: "Sept 2025",
    description: (
      <>
        Our paper on multilingual audio transcription and translation into selected native languages was presented at the 2nd Asia Pacific Conference on Innovation in Technology (APCIT) in Mysore, India, and published in IEEE Xplore.{" "}
        <a href="https://doi.org/10.1109/APCIT65661.2025.11411245" target="_blank" rel="noopener noreferrer">[DOI]</a>
      </>
    ),
  },
  {
    id: 2,
    date: "Sept 2024",
    description: (
      <>
        Graduated with First Class Honours in Mechatronics Engineering from FUNAAB as the department&apos;s Best Graduating Student, and received the Prof. L. O. Kehinde Award for Best Graduating Student in System Modelling and Simulation.
      </>
    ),
  },
  {
    id: 1,
    date: "July 2024",
    description: (
      <>
        Recognized as the Best 400 Level Student in the College of Engineering, FUNAAB, for the 2022/2023 session.
      </>
    ),
  },
];

// Group items by the year in their date ("Sept 2026" -> "2026"), keeping newest-first order.
const groupNewsByYear = (items) => {
  const groups = new Map();
  items.forEach((item) => {
    const year = item.date.match(/\d{4}/)[0];
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(item);
  });
  return groups;
};

const groupedNews = groupNewsByYear(newsItems);
const years = [...groupedNews.keys()];

const News = () => {
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <NewsSection id="news">
      <h1>News</h1>
      <div className="year-tabs" role="tablist">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            role="tab"
            aria-selected={activeYear === year}
            className={`year-tab${activeYear === year ? " active" : ""}`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        {groupedNews.get(activeYear).map((item) => (
          <div key={item.id} className="news-item">
            <span className="date">{item.date}:</span>
            <span className="description">{item.description}</span>
          </div>
        ))}
      </div>
    </NewsSection>
  );
};

export default News;
