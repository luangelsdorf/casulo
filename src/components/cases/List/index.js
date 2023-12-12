import TestimonialCard from 'src/components/common/TestimonialCard';
import styles from './List.module.scss';
import Button from 'src/components/common/Button';
import { useState } from 'react';
import Case from '../Case';
import Modal from 'src/components/common/Modal';
import { useRouter } from 'next/router';

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
        <div className={styles.filters} style={{ color: 'black' }}>
          <Button onClick={handleClick} data-filter-value="all" className="sm" btnElement>Todos</Button>
          <Button onClick={handleClick} data-filter-field="sex" data-filter-value="Macho" className="sm" btnElement>♂</Button>
          <Button onClick={handleClick} data-filter-field="sex" data-filter-value="Fêmea" className="sm" btnElement>♀</Button>
          <Button onClick={handleClick} data-filter-field="size" data-filter-value="Filhote" className="sm" btnElement>Filhote</Button>
          <Button onClick={handleClick} data-filter-field="size" data-filter-value="P" className="sm" btnElement>P</Button>
          <Button onClick={handleClick} data-filter-field="size" data-filter-value="M" className="sm" btnElement>M</Button>
          <Button onClick={handleClick} data-filter-field="size" data-filter-value="G" className="sm" btnElement>G</Button>
          <Button onClick={handleClick} data-filter-field="size" data-filter-value="GG" className="sm" btnElement>GG</Button>
        </div>
        <div className="row justify-content-center">
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
            <Modal open={!!router.query.dog} toggleOpen={() => router.replace(router.pathname, router.asPath, { scroll: false })}>
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
