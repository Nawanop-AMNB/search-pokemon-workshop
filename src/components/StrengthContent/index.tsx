import LabelValue from '../LabelValue';

export type StrengthContentProps = {
  resistant: string[];
  weaknesses: string[];
};

function StrengthContent({ resistant, weaknesses }: StrengthContentProps) {
  return (
    <>
      <LabelValue label={'Resistants: '} value={resistant.join(', ')} />
      <LabelValue label={'Weaknesses: '} value={weaknesses.join(', ')} />
    </>
  );
}

export default StrengthContent;
