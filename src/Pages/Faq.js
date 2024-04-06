import Accordion from "../Components/Accordion";

import bannerImage from "../img/faq-banner-image.png";

const faqs = [
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
  {
    question: "What is DIGITALIZECRYOTO?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dui suspendisse nisl egestas neque amet risus vestibulum dolor. Vivamus consequat aliquam erat gravida mauris ultrices condimentum. At varius gravida interdum quis in sollicitudin interdum. Pharetra egestas nibh facilisi molestie. Augue faucibus elementum morbi lorem enim. Nulla interdum mattis quam id volutpat potenti consequat cum parturient. Volutpat malesuada est bibendum suspendisse in in nunc pellentesque ultrices. Blandit ut.",
  },
];

const Faq = () => {
  return (
    <section className="mb-52">
      <div class="homepage-section-fx"></div>
      <div>
        <div className="linear_bg">
          <div className="flex max-lg:flex-wrap-reverse px-3 md:px-28 py-16 justify-between max-lg:justify-center items-center">
            <div className="w-auto xl:w-[639px] text-white">
              <h1 className="text-4xl sm:text-[50px] font-bold uppercase leading-none">
                FREQUENTLY ASKED QUESTIONS (FAQ)
              </h1>
            </div>
            <div className="">
              <img src={bannerImage} alt="statistics" className={`w-[300px]`} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-[100px] py-[100px]">
        <div className="flex flex-col gap-10">
          {faqs.map((faq, index) => (
            <Accordion key={index} data={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
