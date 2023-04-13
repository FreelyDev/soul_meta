import { useState } from "react";
import Expand from "react-expand-animated";
import "./faq.scss";
export default function Faq() {
  const faqData = [
    {
      quetion: "Who is this project addressed to?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsam accusantium non dignissimos repudiandae, sit deleniti atque, et blanditiis, magnam eligendi minima ex laborum. Hic esse animi recusandae quod assumenda.",
      ],
    },

    {
      quetion: "What makes ecoterra unique and valuable?",
      answer: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsam accusantium non dignissimos repudiandae, sit deleniti atque, et blanditiis, magnam eligendi minima ex laborum. Hic esse animi recusandae quod assumenda."],
    },
    {
      quetion: "How can I earn ecoterra for recycling?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsam accusantium non dignissimos repudiandae, sit deleniti atque, et blanditiis, magnam eligendi minima ex laborum. Hic esse animi recusandae quod assumenda.",
      ],
    },
    {
      quetion: "What is carbon offsetting?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsam accusantium non dignissimos repudiandae, sit deleniti atque, et blanditiis, magnam eligendi minima ex laborum. Hic esse animi recusandae quod assumenda.",
      ],
    },
    {
      quetion: "What kind of brands can use ecoterra?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsam accusantium non dignissimos repudiandae, sit deleniti atque, et blanditiis, magnam eligendi minima ex laborum. Hic esse animi recusandae quod assumenda.",
      ],
    },
    {
      quetion: "Is carbon offsetting legitimate?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsam accusantium non dignissimos repudiandae, sit deleniti atque, et blanditiis, magnam eligendi minima ex laborum. Hic esse animi recusandae quod assumenda.",
      ],
    },
    
  ];
  const [faqId, setFaqId] = useState(-1);
  const handleClick = (id: number) => {
    if (faqId !== -1) {
      if (faqId === id) {
        setFaqId(-1);
      } else {
        setFaqId(id);
      }
    } else {
      setFaqId(id);
    }
  };
  const styles = {
    open: { width: "100%" },
    close: { width: "100%" }
  };
  const transitions = ["height", "opacity", "background"];
  return (
    <div className="faq" id="faq">
      <div className="faqContent" data-aos="fade-up">
        <h1>Frequently asked questions</h1>
        <div className="faqWrapper">
          {faqData.map((d, k) => (
            <div
              className="line"
              key={k}
              onClick={() => {
                handleClick(k);
              }}
            >
              <div
                style={{ color: faqId === k ? `#fff` : `#fff` }}
                className="question"
              >
                <p>{d.quetion}</p>
                <i
                  className="show fas fa-caret-right"
                  style={{
                    transform: k === faqId ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                ></i>
              </div>
              <Expand
                open={faqId === k}
                duration={300}
                styles={styles}
                transitions={transitions}
              >
                <p className="answer">
                  {d.answer}
                </p>
              </Expand>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
