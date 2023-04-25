import React from "react";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Layout title={"Ingresa a tu cuenta"}>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            required=""
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            required=""
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Ingresar
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Aún no tienes cuenta?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Regístrate
          </Link>
        </p>
      </form>
    </Layout>
  );
};
