

import { useFeatureStore } from '@/lib/store/store';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode;
    id: string;
}

export const FeatureTitleContainer = ({children, id}: Props) => {
    const ref = useRef<any>()
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
    const inViewFeature = useFeatureStore((state) => state.inViewFeature)
    useEffect(() => {
        if (isInView) setInViewFeature(id)
        if (!isInView && inViewFeature === id) setInViewFeature(null)
      
    }, [isInView, id, setInViewFeature, inViewFeature ])
    
    
  return (
    <div ref={ref} className={`flex flex-col items-start justify-center gap-3 lg:py-[10rem] py-6 transition-transform   ${isInView ? 'opacity-100' : 'lg:opacity-10'}`}>{children}</div>
  )
}
