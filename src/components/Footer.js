const Footer = () => (
  <footer className="bg-blue-600 text-white py-6 mt-10 w-full">
    <div className="max-w-7xl mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Conversor de Monedas. Todos los derechos reservados.</p>
      <p className="mt-2">Tasa de cambio actualizada diariamente.</p>
    </div>
  </footer>
);

export default Footer;
