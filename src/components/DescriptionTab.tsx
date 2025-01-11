"use client"; 

import { useState } from "react";

export default function DescriptionTab() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="p-6 bg-white text-black">
      {/* Tabs Section */}
      <div className="flex border-b border-gray-700 mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "description"
              ? "bg-orange-500 text-black"
              : "bg-transparent text-black"
          } font-medium rounded-t-md focus:outline-none`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "reviews"
              ? "bg-orange-500 text-black"
              : "bg-transparent text-black"
          } font-medium rounded-t-md focus:outline-none`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (24)
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "description" && (
        <div className="text-gray-800">
          <p className="mb-4">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
            sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
            Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
            interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
            facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          </p>
          <p className="mb-4">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
            accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis
            auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis
            vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio
            vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
          </p>
          <h3 className="text-xl font-bold mb-2">Key Benefits</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li>
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus
              nisl.
            </li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>
              Mauris eget diam magna, in blandit turpis.
            </li>
          </ul>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-800">
          <p>
            Reviews content will go here. This is a placeholder for the
            reviews section.
          </p>
        </div>
      )}
    </div>
  );
}
