import { useState, useEffect } from "react";

function CVModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const dismissedExpiry = localStorage.getItem("cv_modal_dismissed");
    if (dismissedExpiry) {
      const expiryTime = parseInt(dismissedExpiry, 10);
      if (Date.now() < expiryTime) {
        return;
      } else {
        localStorage.removeItem("cv_modal_dismissed");
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem("cv_modal_dismissed", expiry.toString());
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/cv-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setIsSuccess(true);
        const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem("cv_modal_dismissed", expiry.toString());
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
      }
    } catch (err) {
      setError("Không thể kết nối tới máy chủ. Vui lòng kiểm tra mạng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 shadow-2xl transition-all border border-slate-100">
        {isSuccess ? (
          <div className="text-center py-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Gửi Thành Công!</h3>
            <p className="mt-2 text-sm text-slate-500">
              Hồ sơ năng lực chi tiết đã được gửi tới email <span className="font-semibold text-slate-700">{email}</span>. Vui lòng kiểm tra hộp thư của bạn.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-slate-950 tracking-tight">
              Nhận Hồ Sơ Năng Lực Chi Tiết
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
              Để lại email của bạn bên dưới để nhận ngay bộ hồ sơ năng lực chi tiết về các dự án đã triển khai, công nghệ sử dụng, và kinh nghiệm làm việc thực tế.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="nhap.email@cua-ban.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
              {error && (
                <p className="mt-2 text-xs font-semibold text-red-600">{error}</p>
              )}
              <div className="mt-5 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="rounded border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Bỏ qua
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded bg-brand-green px-4 py-2 text-xs font-bold text-white hover:bg-[#438a5e] transition disabled:opacity-50"
                >
                  {isSubmitting ? "Đang xử lý..." : "Nhận Hồ Sơ"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CVModal;
