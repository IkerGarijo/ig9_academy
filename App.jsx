export default function IG9Academy() {
  return (
    <div className="bg-white text-black font-sans">
      <header className="bg-black p-6 shadow-md flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-extrabold text-yellow-500 tracking-wide">IG9 Academy</h1>
          <p className="text-md text-white italic ml-2">Aprende. Crece. Gana.</p>
        </div>
      </header>

      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p className="max-w-2xl mx-auto">
          IG9 Academy no es solo una academia de fútbol: es una familia donde cada jugador y jugadora encuentra un espacio para crecer, aprender y superar sus límites. Fundada por Iker Garijo, futbolista, esta iniciativa nace del compromiso por devolver al fútbol base los valores que de verdad importan: pasión, esfuerzo, humildad y confianza. Aquí no solo entrenamos habilidades, formamos personas con carácter dentro y fuera del campo.
        </p>
      </section>

      <section className="bg-[#f8f6f1] p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Metodología</h2>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside">
          <li>Desarrollo técnico-táctico</li>
          <li>Enfoque individualizado por nivel</li>
          <li>Fomento de valores: respeto, compromiso y esfuerzo</li>
          <li>Tutorización individual de los futbolistas</li>
        </ul>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#fffdf5] p-4 rounded-2xl shadow">Entrenamientos semanales</div>
          <div className="bg-[#fffdf5] p-4 rounded-2xl shadow">Torneos internos</div>
          <div className="bg-[#fffdf5] p-4 rounded-2xl shadow">Campus especiales</div>
          <div className="bg-[#fffdf5] p-4 rounded-2xl shadow">Entrenamientos personalizados</div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contacto e Inscripción</h2>
        <p className="mb-2">Para más información contáctanos al <span className="font-bold">629 804 868</span></p>
        <p className="mb-4">Síguenos en Instagram: <span className="text-yellow-500">@ig9academy</span></p>
        <form action="https://formspree.io/f/mnqevkze" method="POST" className="max-w-xl mx-auto text-left space-y-4">
          <input type="text" name="nombreJugador" placeholder="Nombre del jugador/a" required className="w-full p-2 border rounded" />
          <input type="number" name="edad" placeholder="Edad" required className="w-full p-2 border rounded" />
          <input type="text" name="nombreTutor" placeholder="Nombre del padre/madre o tutor" required className="w-full p-2 border rounded" />
          <input type="tel" name="telefono" placeholder="Teléfono de contacto" required className="w-full p-2 border rounded" />
          <input type="text" name="piernaDominante" placeholder="Pierna dominante (izquierda/derecha)" className="w-full p-2 border rounded" />
          <select name="tallaCamiseta" required className="w-full p-2 border rounded">
            <option value="">Talla de camiseta</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <select name="tallaPantalon" required className="w-full p-2 border rounded">
            <option value="">Talla de pantalón</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <textarea name="aspectosMejorar" placeholder="Aspectos a mejorar" className="w-full p-2 border rounded" rows="2"></textarea>
          <textarea name="expectativas" placeholder="Expectativas en la academia" className="w-full p-2 border rounded" rows="2"></textarea>
          <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded-xl">Enviar inscripción</button>
        </form>
      </section>

      <footer className="bg-black text-white text-center p-4 mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} IG9 Academy - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
