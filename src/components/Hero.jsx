import { motion } from 'framer-motion';

import { styles } from '../styles';
import { VolumeCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4bb9d3]" />
          <div className="w-1 sm:h-80 h-40 cyan-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            This is <span className="text-[#4bb9d3]">ISO</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A 3D test Lab
          </p>
        </div>
      </div>
      <VolumeCanvas />
    </section>
  )
}

export default Hero