

const Faq = () => {
    const faqs = [
  {
    question: "What types of products does Capmers Shop offer?",
    answer: "Capmers Shop offers a wide range of camping gear and apparel, including tents, sleeping bags, backpacks, outdoor clothing, footwear, camping accessories, and more."
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order directly through our website by adding items to your cart, proceeding to checkout, and completing the payment process. We accept various payment methods for your convenience."
  },
  {
    question: "What are your shipping options?",
    answer: "We offer standard and expedited shipping options. The shipping cost and delivery time may vary depending on your location and the selected shipping method. You can choose your preferred option during checkout."
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy allows you to return unused and undamaged items within 30 days of purchase for a full refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination. You can select your country during checkout to see available shipping options."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status of your shipment on our website or the shipping carrier's website."
  },
  {
    question: "Can I cancel or modify my order after it has been placed?",
    answer: "To cancel or modify your order, please contact our customer service as soon as possible. We will do our best to accommodate your request, but please note that orders that have already been processed or shipped may not be eligible for cancellation or modification."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team through our Contact Us page on the website. We are available to assist you with any questions, concerns, or inquiries regarding your orders, products, or services."
  }
];

  return (
   <div>
     <div className="">
    <h1 className=" md:text-4xl text-2xl font-semibold text-center">Frequently Asked Questions (FAQ)</h1>
   
    </div>
   <div className="pt-10 py-5">
   <div className="join join-vertical w-full">
  {
    faqs.map((faq,index)=>{
        return <div className="collapse collapse-arrow join-item " key={index}>
        <input type="radio" name="my-accordion-4"  />
        <div className="collapse-title text-xl font-medium">{faq.question}</div>
        <div className="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    })
  }


</div>
   </div>
   </div>
  )
}

export default Faq