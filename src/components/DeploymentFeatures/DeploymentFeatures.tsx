import React from 'react';
import GitDeploySection from './GitDeploySection';
import CollabSection from './CollabSection';

const DeploymentFeatures: React.FC = () => {
  return (
    <section className="grid_grid__MIUsj" data-grid="" style={{
      '--sm-grid-rows': '2',
      '--md-grid-rows': '1',
      '--sm-grid-columns': '1',
      '--md-grid-columns': '2',
      '--sm-height': 'fit-content'
    } as React.CSSProperties}>
      <div className="grid_block__lyImu features_cell__OdFk8" data-grid-cell="" style={{
        '--sm-grid-row': 'auto',
        '--sm-grid-column': 'auto',
        '--sm-cell-rows': 'auto',
        '--sm-cell-columns': 'auto'
      } as React.CSSProperties}>
        <div className="stack_stack__iZkUS stack features_inner__Ay2Oj" data-version="v1" style={{
          '--stack-flex': 'initial',
          '--stack-direction': 'column',
          '--stack-align': 'stretch',
          '--stack-justify': 'flex-start',
          '--stack-padding': '0px',
          '--stack-gap': '0px'
        } as React.CSSProperties}>
          <GitDeploySection />
        </div>
      </div>
      
      <div className="grid_block__lyImu features_cell__OdFk8" data-grid-cell="" style={{
        '--sm-grid-row': 'auto',
        '--sm-grid-column': 'auto',
        '--sm-cell-rows': 'auto',
        '--sm-cell-columns': 'auto'
      } as React.CSSProperties}>
        <div className="stack_stack__iZkUS stack features_inner__Ay2Oj" data-version="v1" style={{
          '--stack-flex': 'initial',
          '--stack-direction': 'column',
          '--stack-align': 'stretch',
          '--stack-justify': 'flex-start',
          '--stack-padding': '0px',
          '--stack-gap': '0px'
        } as React.CSSProperties}>
          <CollabSection />
        </div>
      </div>
      
      {/* Grid Guides */}
      <div aria-hidden="true" className="grid_guides__XbybQ" data-grid-guides="true">
        <div aria-hidden="true" className="grid_guide__Ei25j grid_xsGuide__Xupsz" style={{"--x": 1, "--y": 1, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
        <div aria-hidden="true" className="grid_guide__Ei25j grid_xsGuide__Xupsz" style={{"--x": 1, "--y": 2, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
      </div>
      <div aria-hidden="true" className="grid_guides__XbybQ" data-grid-guides="true">
        <div aria-hidden="true" className="grid_guide__Ei25j grid_smGuide__dhwwf" style={{"--x": 1, "--y": 1, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
        <div aria-hidden="true" className="grid_guide__Ei25j grid_smGuide__dhwwf" style={{"--x": 1, "--y": 2, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
      </div>
      <div aria-hidden="true" className="grid_guides__XbybQ" data-grid-guides="true">
        <div aria-hidden="true" className="grid_guide__Ei25j grid_smdGuide__pWYK7" style={{"--x": 1, "--y": 1, borderBottom: "none"} as React.CSSProperties}></div>
        <div aria-hidden="true" className="grid_guide__Ei25j grid_smdGuide__pWYK7" style={{"--x": 2, "--y": 1, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
      </div>
      <div aria-hidden="true" className="grid_guides__XbybQ" data-grid-guides="true">
        <div aria-hidden="true" className="grid_guide__Ei25j grid_mdGuide__Kf1OM" style={{"--x": 1, "--y": 1, borderBottom: "none"} as React.CSSProperties}></div>
        <div aria-hidden="true" className="grid_guide__Ei25j grid_mdGuide__Kf1OM" style={{"--x": 2, "--y": 1, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
      </div>
      <div aria-hidden="true" className="grid_guides__XbybQ" data-grid-guides="true">
        <div aria-hidden="true" className="grid_guide__Ei25j grid_lgGuide__2OXaB" style={{"--x": 1, "--y": 1, borderBottom: "none"} as React.CSSProperties}></div>
        <div aria-hidden="true" className="grid_guide__Ei25j grid_lgGuide__2OXaB" style={{"--x": 2, "--y": 1, borderRight: "none", borderBottom: "none"} as React.CSSProperties}></div>
      </div>
    </section>
  );
};

export default DeploymentFeatures;
