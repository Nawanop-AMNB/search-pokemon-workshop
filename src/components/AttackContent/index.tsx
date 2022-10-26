import { GetPokemonByIdQuery } from '../../types';
import LabelValue from '../LabelValue';

export type AttackContentProps = {
  attack: GetPokemonByIdQuery['pokemon']['attacks']['fast'][number];
};

function AttackContent({ attack }: AttackContentProps) {
  return (
    <div className='border border-purple-500 border-solid rounded-md mt-3 mb-3'>
      <LabelValue label={'Name: '} value={attack.name} />
      <LabelValue label={'Type: '} value={attack.type} />
      <LabelValue
        label={'Damage: '}
        value={String(attack.damage ? attack.damage : 0)}
      />
    </div>
  );
}

export default AttackContent;
