// "use client";
import { WEBSITES } from "@/lib/data";
import React from "react";

export default function WebsitesPage() {
  return (
    <div>
      <h1>Websites</h1>

      <ul>
        {WEBSITES.map((website) => (
          <li key={website.url}>
            <a href={website.url} target="_blank" rel="noopener noreferrer">
              {website.name}
            </a>
            <p>{website.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
