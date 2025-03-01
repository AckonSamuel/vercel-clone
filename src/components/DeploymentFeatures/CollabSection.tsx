import React from 'react';
import CommentsVisual from './visuals/CommentsVisual';
import { MessageIcon } from '../icons/MessageIcon';

const CollabSection: React.FC = () => {
  return (
    <>
      <div className="stack_stack__iZkUS stack impact_impact__TCMg9" data-version="v1" style={{
        '--stack-flex': 'initial',
        '--stack-direction': 'column',
        '--stack-align': 'stretch',
        '--stack-justify': 'flex-start',
        '--stack-padding': '0px',
        '--sm-stack-gap': '8px',
        '--md-stack-gap': '16px',
        '--lg-stack-gap': '16px',
        '--xl-stack-gap': '16px'
      } as React.CSSProperties}>
        <div className="stack_stack__iZkUS stack" data-version="v1" style={{
          '--stack-flex': 'initial',
          '--stack-direction': 'row',
          '--stack-align': 'center',
          '--stack-justify': 'space-between',
          '--stack-padding': '0px',
          '--stack-gap': '0px'
        } as React.CSSProperties}>
          <div className="stack_stack__iZkUS stack" data-version="v1" style={{
            '--stack-flex': 'initial',
            '--stack-direction': 'row',
            '--stack-align': 'center',
            '--stack-justify': 'flex-start',
            '--stack-padding': '0px',
            '--stack-gap': '8px'
          } as React.CSSProperties}>
            <div style={{ height: '16px', width: '16px' }}>
              <MessageIcon />
            </div>
            <h2 className="text_wrapper__i87JK" data-version="v1" style={{
              '--text-color': 'var(--ds-gray-900)',
              '--xs-text-size': '0.875rem',
              '--xs-text-line-height': '1.25rem',
              '--xs-text-weight': '400',
              '--xs-text-letter-spacing': 'initial',
              '--sm-text-size': '0.875rem',
              '--sm-text-line-height': '1.25rem',
              '--sm-text-weight': '400',
              '--sm-text-letter-spacing': 'initial',
              '--smd-text-size': '1rem',
              '--smd-text-line-height': '1.25rem',
              '--smd-text-weight': '400',
              '--smd-text-letter-spacing': 'initial',
              '--md-text-size': '1rem',
              '--md-text-line-height': '1.25rem',
              '--md-text-weight': '400',
              '--md-text-letter-spacing': 'initial',
              '--lg-text-size': '1rem',
              '--lg-text-line-height': '1.25rem',
              '--lg-text-weight': '400',
              '--lg-text-letter-spacing': 'initial'
            } as React.CSSProperties}>Collaborative pre-production</h2>
          </div>
        </div>
        
        <div className="stack_stack__iZkUS stack" data-version="v1" style={{
          '--stack-flex': 'initial',
          '--sm-stack-direction': 'column',
          '--md-stack-direction': 'row',
          '--stack-align': 'center',
          '--stack-justify': 'flex-start',
          '--stack-padding': '0px',
          '--sm-stack-gap': '16px',
          '--md-stack-gap': '40px',
          '--lg-stack-gap': '40px',
          '--xl-stack-gap': '40px'
        } as React.CSSProperties}>
          <div className="impact_title__dEENx" data-size="large">
            <strong>Every deploy is remarkable.</strong>
            <p className="impact_description__PpcQM">Chat with your team on real, production-grade UI, not just designs.</p>
          </div>
        </div>
      </div>
      
      <div style={{ contentVisibility: 'visible', containIntrinsicHeight: '500px' }}>
        <CommentsVisual />
      </div>
    </>
  );
};

export default CollabSection;
