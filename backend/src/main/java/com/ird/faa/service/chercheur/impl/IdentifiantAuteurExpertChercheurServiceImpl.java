package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.IdentifiantAuteurExpert;
import com.ird.faa.bean.IdentifiantRecherche;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.dao.IdentifiantAuteurExpertDao;
import com.ird.faa.service.chercheur.facade.IdentifiantAuteurExpertChercheurService;
import com.ird.faa.service.chercheur.facade.IdentifiantRechercheChercheurService;
import com.ird.faa.service.chercheur.facade.ChercheurChercheurService;

import com.ird.faa.ws.rest.provided.vo.IdentifiantAuteurExpertVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class IdentifiantAuteurExpertChercheurServiceImpl extends AbstractServiceImpl<IdentifiantAuteurExpert> implements IdentifiantAuteurExpertChercheurService {

@Autowired
private IdentifiantAuteurExpertDao identifiantAuteurExpertDao;

        @Autowired
        private IdentifiantRechercheChercheurService identifiantRechercheService ;
        @Autowired
        private ChercheurChercheurService chercheurService ;


@Autowired
private EntityManager entityManager;


@Override
public List<IdentifiantAuteurExpert> findAll(){
        return identifiantAuteurExpertDao.findAll();
}

        @Override
        public List<IdentifiantAuteurExpert> findByIdentifiantRechercheCode(String code){
        return identifiantAuteurExpertDao.findByIdentifiantRechercheCode(code);
        }

        @Override
        @Transactional
        public int deleteByIdentifiantRechercheCode(String code){
        return identifiantAuteurExpertDao.deleteByIdentifiantRechercheCode(code);
        }

        @Override
        public List<IdentifiantAuteurExpert> findByIdentifiantRechercheId(Long id){
        return identifiantAuteurExpertDao.findByIdentifiantRechercheId(id);
        }

        @Override
        @Transactional
        public int deleteByIdentifiantRechercheId(Long id){
        return identifiantAuteurExpertDao.deleteByIdentifiantRechercheId(id);
        }


        @Override
        public List<IdentifiantAuteurExpert> findByChercheurNumeroMatricule(String numeroMatricule){
        return identifiantAuteurExpertDao.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        @Transactional
        public int deleteByChercheurNumeroMatricule(String numeroMatricule){
        return identifiantAuteurExpertDao.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        public List<IdentifiantAuteurExpert> findByChercheurId(Long id){
        return identifiantAuteurExpertDao.findByChercheurId(id);
        }

        @Override
        @Transactional
        public int deleteByChercheurId(Long id){
        return identifiantAuteurExpertDao.deleteByChercheurId(id);
        }


@Override
public IdentifiantAuteurExpert findById(Long id){
if(id==null) return null;
return identifiantAuteurExpertDao.getOne(id);
}

@Override
public IdentifiantAuteurExpert findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(identifiantAuteurExpertDao.findById(id).isPresent())  {
identifiantAuteurExpertDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public IdentifiantAuteurExpert update(IdentifiantAuteurExpert identifiantAuteurExpert){
IdentifiantAuteurExpert foundedIdentifiantAuteurExpert = findById(identifiantAuteurExpert.getId());
if(foundedIdentifiantAuteurExpert==null) return null;
else{
return  identifiantAuteurExpertDao.save(identifiantAuteurExpert);
}
}

@Override
public IdentifiantAuteurExpert save (IdentifiantAuteurExpert identifiantAuteurExpert){



    findIdentifiantRecherche(identifiantAuteurExpert);
    findChercheur(identifiantAuteurExpert);

return identifiantAuteurExpertDao.save(identifiantAuteurExpert);


}

@Override
public List<IdentifiantAuteurExpert> save(List<IdentifiantAuteurExpert> identifiantAuteurExperts){
List<IdentifiantAuteurExpert> list = new ArrayList<>();
for(IdentifiantAuteurExpert identifiantAuteurExpert: identifiantAuteurExperts){
list.add(save(identifiantAuteurExpert));
}
return list;
}



@Override
@Transactional
public int delete(IdentifiantAuteurExpert identifiantAuteurExpert){
    if(identifiantAuteurExpert.getId()==null) return -1;
    IdentifiantAuteurExpert foundedIdentifiantAuteurExpert = findById(identifiantAuteurExpert.getId());
    if(foundedIdentifiantAuteurExpert==null) return -1;
identifiantAuteurExpertDao.delete(foundedIdentifiantAuteurExpert);
return 1;
}


public List<IdentifiantAuteurExpert> findByCriteria(IdentifiantAuteurExpertVo identifiantAuteurExpertVo){

String query = "SELECT o FROM IdentifiantAuteurExpert o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",identifiantAuteurExpertVo.getId());
            query += SearchUtil.addConstraint( "o", "valeur","LIKE",identifiantAuteurExpertVo.getValeur());
    if(identifiantAuteurExpertVo.getIdentifiantRechercheVo()!=null){
        query += SearchUtil.addConstraint( "o", "identifiantRecherche.id","=",identifiantAuteurExpertVo.getIdentifiantRechercheVo().getId());
            query += SearchUtil.addConstraint( "o", "identifiantRecherche.code","LIKE",identifiantAuteurExpertVo.getIdentifiantRechercheVo().getCode());
    }

    if(identifiantAuteurExpertVo.getChercheurVo()!=null){
        query += SearchUtil.addConstraint( "o", "chercheur.id","=",identifiantAuteurExpertVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint( "o", "chercheur.numeroMatricule","LIKE",identifiantAuteurExpertVo.getChercheurVo().getNumeroMatricule());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findIdentifiantRecherche(IdentifiantAuteurExpert identifiantAuteurExpert){
        IdentifiantRecherche loadedIdentifiantRecherche =identifiantRechercheService.findByIdOrCode(identifiantAuteurExpert.getIdentifiantRecherche());

    if(loadedIdentifiantRecherche==null ) {
        return;
    }
    identifiantAuteurExpert.setIdentifiantRecherche(loadedIdentifiantRecherche);
    }
    private void findChercheur(IdentifiantAuteurExpert identifiantAuteurExpert){
        Chercheur loadedChercheur =chercheurService.findByIdOrNumeroMatricule(identifiantAuteurExpert.getChercheur());

    if(loadedChercheur==null ) {
        return;
    }
    identifiantAuteurExpert.setChercheur(loadedChercheur);
    }

@Override
@Transactional
public void delete(List<IdentifiantAuteurExpert> identifiantAuteurExperts){
        if(ListUtil.isNotEmpty(identifiantAuteurExperts)){
        identifiantAuteurExperts.forEach(e->identifiantAuteurExpertDao.delete(e));
        }
}
@Override
public void update(List<IdentifiantAuteurExpert> identifiantAuteurExperts){
if(ListUtil.isNotEmpty(identifiantAuteurExperts)){
identifiantAuteurExperts.forEach(e->identifiantAuteurExpertDao.save(e));
}
}



}
