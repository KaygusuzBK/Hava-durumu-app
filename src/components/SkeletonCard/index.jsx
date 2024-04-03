import Skeleton from "react-loading-skeleton";
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 w-80 h-72">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-8 mb-3"></div>
        <div className="bg-gray-300 h-24 mb-3"></div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <div className="bg-gray-300 h-12 w-24 mb-1"></div>
            <div className="flex justify-between">
              <div className="bg-gray-300 h-6 w-12 mr-2"></div>
              <div className="bg-gray-300 h-6 w-12"></div>
            </div>
          </div>
          <div className="bg-gray-300 h-24 w-24"></div>
        </div>
      </div>
    </div>
  );
}
