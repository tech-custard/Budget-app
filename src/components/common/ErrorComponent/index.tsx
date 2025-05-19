import * as React from "react";
import { Button } from "@components/ui/Button";
import { FallbackProps } from "react-error-boundary";

export const ErrorComponent = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {error.message}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Something went wrong. Try clicking the refresh page button to reload
          the application.
        </p>
        <Button
          className=""
          onClick={resetErrorBoundary}
          title={"Refresh page"}
          withIcon={false}
        />
      </div>
    </main>
  );
};
