import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type LoaderProps = {
  setLoading: (loading: boolean) => void;
};

const Loader = ({ setLoading }: LoaderProps) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (done) {
      setLoading(false);
    }
  }, [done, setLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-base"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-px w-48 overflow-hidden bg-brand-border">
          <motion.div
            className="absolute inset-y-0 left-0 bg-brand-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          />
        </div>
        <motion.div
          className="label-mono text-xs text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          emrich-michael perrier
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
