import BoxFeature from './index';

import features from './features';

export default function BoxFeatureList() {
  return (
    <>
      {features.map((feature) => (
        <BoxFeature key={feature.id} feature={feature} />
      ))}
    </>
  );
}
