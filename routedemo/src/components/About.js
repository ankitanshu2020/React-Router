import React from "react";
import { useParams } from "react-router-dom";

export default function About(props) {
  const params = useParams();
  return <div>This Is About Page | {params?.id}</div>;
}
