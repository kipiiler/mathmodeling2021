import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/apiUrl.json";
import FAQDisplay from "../../components/Nav/Faq";
interface IFAQ {
  id: string;
  question: string;
  answer: string;
}
export default function FAQSection() {
  const [faqlist, setFaqList] = useState<[IFAQ]>();
  useEffect(() => {
    axios.get(`${apiUrl}/api/faq`).then((res) => {
      if (res.data) {
        setFaqList(res.data);
      }
    });
  }, []);

  return (
    <>
      {faqlist?.map((item) => (
        <FAQDisplay
          key={item.id}
          question={item?.question}
          answer={item?.answer}
        />
      ))}
    </>
  );
}
