import React from "react";
import Homeherobanner from "../../components/homecomponents/homeherobanner";
import Ourservicesection from "../../components/homecomponents/ourservicesection";
import Ourexpertteamsection from "../../components/homecomponents/ourexpertteamsection";
import Whychooseussection from "../../components/homecomponents/whychooseussection";

export default function Home() {
  return (
    <>
      <Homeherobanner />
      <Ourservicesection />
      <Ourexpertteamsection />
      <Whychooseussection />
    </>
  );
}
