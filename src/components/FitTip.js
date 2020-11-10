import React from "react";

export default function FitTip() {
  return (
    <div id="fit-tip">
      <div className="fit-tip-text">
        <p>
          Today's Fit Tip: Stretching is super important! Do it as soon as you
          wake up to get your blood flowing. Science sees a 60% decrease in
          injuries if people just stretch their joints and muscles before
          attempting to live.
        </p>
        <p>
          Its level of importance rises exponentially as you get older, so find
          a way that works for you to get it in. Try to start your day with 5-10
          minutes of stretching and breathing. It is an incredibly calm and
          soothing way to wake up, and benefits your body and mind!
        </p>
        <p>
          As with all physical activity, only take your stretches as far as your
          body allows. Find the middle ground between effort and pain.{" "}
          <em>Never</em> lock your knees, and always keep breathing.
        </p>
      </div>
      <img
        src="https://www.risephysicaltherapy.com/uploads/dynamic-stretches.jpg"
        alt="8 stretches to wake your body up"
        className="fit-tip-img"
        height="406px"
        width="800px"
      />
    </div>
  );
}
