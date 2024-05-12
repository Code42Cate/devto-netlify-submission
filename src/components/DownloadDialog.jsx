import { Fragment, useState } from "react";

import { useRoute } from "wouter";
import { Dialog, Transition } from "@headlessui/react";

export default function DownloadDialog({
  showDownloadModal,
  setShowDownloadModal,
  images,
}) {
  const [imageType, setImageType] = useState("png");
  const [fit, setFit] = useState("contain");
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);

  const [, params] = useRoute("/item/:id");
  const imageId = Number(params?.id);

  return (
    <Transition.Root show={showDownloadModal} as={Fragment}>
      <Dialog className="relative z-10" onClose={setShowDownloadModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="preset"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Wallpaper Preset
                    </label>
                    <select
                      onChange={(e) => {
                        if (!e.target.value) return;

                        const [w, h] = e.target.value.split("x");
                        setWidth(w);
                        setHeight(h);
                        setFit("contain");
                      }}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-amber-600 sm:text-sm sm:leading-6"
                    >
                      <option>Custom</option>
                      <option value="3840x2160">Desktop 4k</option>
                      <option value="2560x1440">Desktop 1440p</option>
                      <option value="1920x1080">Desktop 1080p</option>
                      <option value="1170x2532">iPhone 14</option>
                      <option value="1170x2532">iPhone 13</option>
                      <option value="1170x2532">iPhone 12</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Image Type
                    </label>
                    <select
                      onChange={(e) => setImageType(e.target.value)}
                      id="type"
                      name="type"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-amber-600 sm:text-sm sm:leading-6"
                      value={imageType}
                    >
                      <option value="png">PNG</option>
                      <option value="jpg">JPG</option>
                      <option value="webp">WEBP</option>
                      <option value="avif">AVIF</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Fit
                    </label>
                    <select
                      onChange={(e) => setFit(e.target.value)}
                      value={fit}
                      id="fit"
                      name="fit"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-amber-600 sm:text-sm sm:leading-6"
                    >
                      <option value="contain">contain</option>
                      <option value="cover">cover</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Width
                    </label>
                    <div className="mt-2">
                      <input
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        type="number"
                        name="width"
                        id="width"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Height
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        id="height"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                    onClick={() => {
                      const currentImage = images.find(
                        (image) => image.imageId === imageId
                      );

                      // replace w, h, fit with the values from the form
                      const url = new URL(currentImage.url);
                      url.searchParams.set("w", width);
                      url.searchParams.set("h", height);
                      url.searchParams.set("fit", fit);
                      url.searchParams.set("fm", imageType);

                      const a = document.createElement("a");
                      a.href = url.toString();
                      a.download = "art";
                      a.target = "_blank";
                      a.download = "art";
                      a.click();
                      a.remove();

                      setOpen(false);
                    }}
                  >
                    Save art
                  </button>

                  <span className="text-gray-500 text-xs">
                    Only for personal use!
                  </span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
