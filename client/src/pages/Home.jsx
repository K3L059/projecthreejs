import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
            src='./threejs.png'
            alt="logo"
            className='w-8 h-8 object-contain'
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              {/* <h1 className='head-text'>
                LET'S <br className='xl:block hidden'/> DO IT.
      </h1> */}
              <p className='font-fkk font-normal text-4xl' {...headContainerAnimation} >
              قم بتصميم <br className='xl:block hidden'/> <br />تيشيرتك الخاص <br />بكل سهولة </p>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 font-fkk font-normal text-base'>
              قم بإنشاء نيشيرتك الفريد والحصري باستخدام أداة التخصيص ثلاثية الأبعاد الجديدة تمامًا. <strong>أطلق العنان لخيالك</strong>{" "}وحدد ستايلك الخاص.
              </p>
              <CustomButton 
              type='filled'
              title='ابدأ '
              handleClick={() => state.intro = false}
              customStyles="font-fkk font-normal w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home