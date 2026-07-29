import React, { useState } from "react";
import {
  FaChevronDown,
  FaEllipsisH,
} from "react-icons/fa";

const SmartChat = () => {
  const [showReplies, setShowReplies] = useState(true);

  return (
    <div className="bg-white text-black rounded-2xl shadow-lg p-6 overflow-hidden">
      
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">Smart Chat</h2>

      </div>

      <div className="space-y-4">
        <p className="md:text-lg leading-relaxed text-gray-950">
          Hello{" "}
          <span className="text-blue-400 font-semibold">
            @designteam
          </span>{" "}
          Let's schedule a kick-off meeting and workshop this week.
          It would be great to gather everyone involved in the design
          project. Let me know about your availability in the thread.
        </p>

        <p className="md:text-lg text-black-100">
          Looking forward to it! Thanks.
        </p>
      </div>

      <button
        onClick={() => setShowReplies(!showReplies)}
        className="flex items-center gap-2 text-blue-400 mt-6 mb-6 font-medium hover:text-blue-300"
      >
         replies
        <FaChevronDown
          className={`transition-transform duration-300 ${
            showReplies ? "rotate-180" : ""
          }`}
        />
      </button>

      {showReplies && (
        <div className="space-y-6 max-h-125 overflow-y-auto pr-2">

          <div className="border-t border-slate-700 pt-6">
            
            <div className="flex items-start justify-between">
              
              <div className="flex items-center gap-3">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie"
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-bold md:text-xl">
                      Bonnie Green
                    </h3>

                    <span className="text-gray-400">
                      01/03/2023 4:15 PM
                    </span>
                  </div>
                </div>
              </div>

              <button className="text-gray-400 hover:text-white">
                <FaEllipsisH />
              </button>
            </div>
              {/* spacy-y-* space between para */}
            <div className="mt-5 space-y-4 text-black-100 md:text-lg leading-relaxed">
              <p>Hello everyone,</p>

              <p>
                Thank you for the workshop, it was a very productive
                meeting. I can't wait to start working on this new
                project with you guys.
              </p>

              <p>
                But first things first, I'm waiting for the offer and
                pitch deck from you. It would be great to get it by
                the end of the month.
              </p>

              <p>Cheers!</p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="User"
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-bold text-lg">
                  Jese Leos
                </h3>

                <span className="text-gray-400 text-sm">
                  01/04/2023 11:25 AM
                </span>
              </div>
            </div>

            <p className="mt-4 text-black-100 leading-relaxed">
              Sounds great! I'll send the documents by Friday.
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default SmartChat;