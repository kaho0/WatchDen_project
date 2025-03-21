import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">
              AI-Powered Productivity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Transform your workflow with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                LuminaAI
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Empower your team with AI-driven tools that automate tedious tasks
              and help you focus on what truly matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
              >
                Book a Demo
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium dark:bg-gray-700">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium dark:bg-gray-600">
                  MK
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-xs font-medium dark:bg-gray-500">
                  AS
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-gray-900 dark:text-white">
                  1,000+
                </span>{" "}
                teams already using LuminaAI
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="w-5/6 h-5/6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg flex items-center justify-center p-4">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200">
                      Dashboard Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
