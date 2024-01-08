import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './List.module.scss';
import Button from 'src/components/common/Button';
import { useState } from 'react';
import Case from '../Case';
import Modal from 'src/components/common/Modal';
import { useRouter } from 'next/router';

import Paw from 'public/images/icons/ui/paw.svg';
import Mars from 'public/images/icons/ui/mars.svg';
import Venus from 'public/images/icons/ui/venus.svg';
import F from 'public/images/icons/ui/dog-face-1_f.svg';
import P from 'public/images/icons/ui/dog-face-2_p.svg';
import M from 'public/images/icons/ui/dog-face-3_m.svg';
import G from 'public/images/icons/ui/dog-face-4_g.svg';
import GG from 'public/images/icons/ui/dog-face-5_gg.svg';

export default function List({ cases }) {
  const [list, setList] = useState(cases);
  const router = useRouter();

  function handleClick(e) {
    let { filterField, filterValue } = e.currentTarget.dataset;

    if (filterValue === 'all') {
      setList(cases);
      return;
    }

    e.currentTarget.parentElement.childNodes.forEach(el => el.classList.remove('inverted'));
    e.currentTarget.classList.add('inverted');
    let newList = cases.filter(item => item.attributes[filterField] === filterValue);
    setList(newList);
  }

  return (
    <div className={styles.section}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.filters}>
            <Button LeftIcon={Paw} onClick={handleClick} data-filter-value="all" className="folha transparent sm" btnElement>Todos</Button>
            <div className={styles.div} />
            <Button LeftIcon={Mars} onClick={handleClick} data-filter-field="sex" data-filter-value="Macho" className="folha transparent sm" btnElement>Machos</Button>
            <Button LeftIcon={Venus} onClick={handleClick} data-filter-field="sex" data-filter-value="Fêmea" className="folha transparent sm" btnElement>Fêmeas</Button>
            <div className={styles.div} />
            <Button LeftIcon={F} onClick={handleClick} data-filter-field="size" data-filter-value="Filhote" className="folha transparent sm" btnElement>Filhotes</Button>
            <Button LeftIcon={P} onClick={handleClick} data-filter-field="size" data-filter-value="P" className="folha transparent sm" btnElement>P</Button>
            <Button LeftIcon={M} onClick={handleClick} data-filter-field="size" data-filter-value="M" className="folha transparent sm" btnElement>M</Button>
            <Button LeftIcon={G} onClick={handleClick} data-filter-field="size" data-filter-value="G" className="folha transparent sm" btnElement>G</Button>
            <Button LeftIcon={GG} onClick={handleClick} data-filter-field="size" data-filter-value="GG" className="folha transparent sm" btnElement>GG</Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

          </div>
          <div className="col-12 col-sm-10">
            <div className="row">
              {
                list.length > 0 ? (
                  cases.map((card, index) => (
                    <div className="col-12 col-lg-6 gy-4" key={index} data-display={list.some(dog => dog.attributes.slug === card.attributes.slug)}>
                      <TestimonialCard {...card.attributes} short />
                    </div>
                  ))
                ) : (
                  <p className={styles.notFound}>Nenhum cão encontrado.</p>
                )
              }
            </div>
            <Modal open={!!router.query.dog}>
              {
                router.query.dog && (
                  <Case {...(cases.filter(dog => dog.attributes.slug === router.query.dog)[0].attributes)} />
                )
              }
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
