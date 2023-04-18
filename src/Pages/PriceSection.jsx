import React from "react";

export default function PriceSection() {
  return (
    <div>
      <div>
        <h1>Select a Membership</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
      </div>
      <div>
        <div>
          <h1>Silver Membership</h1>
          <sup>$</sup>30<span>/Mo</span>
          <p>Use this area to describe one of your services</p>
          <p>Valid for one month</p>
        </div>
        <div>
        <h1>Gold Membership</h1>
          <sup>$</sup>35<span>/Mo</span>
          <p>Use this area to describe one of your services</p>
          <p>Valid for 12 month</p>
        </div>
        <div>
        <h1>Platinium Membership</h1>
          <sup>$</sup>40<span>/Mo</span>
          <p>Use this area to describe one of your services</p>
          {/* <p>Valid for one month</p> */}
        </div>
      </div>
    </div>
  );
}
