export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 py-8 text-center mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Institute Technical Council, IIT Bombay. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-sm text-slate-500">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
