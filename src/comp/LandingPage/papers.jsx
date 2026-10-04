import { PapersSection } from "../../assets/styles";

const papers = [
  {
    id: 1,
    title: "Implementation of a Real-Time Maize Leaf Disease Detection System Using Raspberry Pi 5 and YOLOv8",
    authors: "S. Owoeye, F. Durodola, C. Evwidonor, S. Abdulkareem, E. Popoola, & I. Akinode",
    venue: "Tehnicki glasnik / Technical Journal, Vol. 20, No. 3, Sep 2026 (Accepted for Publication)",
    year: "2026",
    status: "Indexed in Web of Science (ESCI), Scopus, ERIH PLUS. JIF(2023) = 0.7 (Q3)",
    links: [
      {
        text: "DOI",
        url: "https://doi.org/10.31803/tg-20240919073402"
      }
    ]
  },
  {
    id: 2,
    title: "Integrating Attention Modules with YOLOv8 for Enhanced Crack Detection and Segmentation",
    authors: "S. Owoeye, F. Durodola, S. O. Abdulkareem, & O. Omotainse",
    venue: "Kurdistan Journal of Applied Research (KJAR), Vol. 11, No. 1, pp. 121–142, Jun 2026",
    year: "2026",
    links: [
      {
        text: "DOI",
        url: "https://doi.org/10.24017/science.2026.1.9"
      }
    ]
  },
  {
    id: 3,
    title: "Prediction of Car Prices in Nigeria Using Machine Learning Models",
    authors: "S. O. Owoeye, F. O. Durodola, S. O. Abdulkareem, K. M. Makinde, & O. E. Folaranmi",
    venue: "Journal of Engineering Research (JER), Vol. 30, No. 3, pp. 115–131, Sep 2025",
    year: "2025"
  },
  {
    id: 4,
    title: "Multi-Lingual Contextual Audio Transcription and Translation to Selected Native Languages",
    authors: "O. O. Nuga, K. A. Amusa, A. J. Olanipekun, S. Matthew, S. B. Owusu, J. O. Salako, P. O. Onabanjo, A. O. Lawal, & S. O. Abdulkareem",
    venue: "2nd Asia Pacific Conference on Innovation in Technology (APCIT), Mysore, India, pp. 1–6, 2025",
    year: "2025",
    status: "Indexed in IEEE Xplore",
    links: [
      {
        text: "IEEE Xplore / DOI",
        url: "https://doi.org/10.1109/APCIT65661.2025.11411245"
      }
    ]
  }
];

const Papers = () => {
  const renderAuthorsWithBoldName = (authors) => {
    const targetNames = ["S. O. Abdulkareem", "S. Abdulkareem"];
    const regex = new RegExp(`(${targetNames.map((n) => n.replace(/\\./g, "\\\\.")).join("|")})`, "g");
    const parts = authors.split(regex);

    return parts.map((part, i) =>
      targetNames.includes(part) ? <strong key={i}>{part}</strong> : part
    );
  };

  return (
    <PapersSection id="publications">
      <h1>Publications</h1>
      {papers.map((paper) => (
        <div key={paper.id} className="paper-item">
          <div className="paper-year">{paper.year}</div>
          <div className="paper-content">
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{renderAuthorsWithBoldName(paper.authors)}</p>
            <p className="paper-venue">{paper.venue}</p>
            {paper.status && <p className="paper-status">{paper.status}</p>}
            {paper.links && paper.links.length > 0 && (
              <div className="paper-links">
                {paper.links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </PapersSection>
  );
};

export default Papers;
