package com.ird.faa.service.core.facade;

import java.util.List;


public interface AbstractService<T,I,V>{

    /**
    * find all T in database
    *
    * @return List<T> , If database is empty return  null.
        */
        List<T> findAll();


        /**
        * find T from database by id (id)
        *
        * @param id - id of T
        * @return the founded  T , If no T were
        * found in database return  null.
        */
        T findById(I id);

        /**
        * find T from database (with associated lists) by id (id)
        *
        * @param id - id of T
        * @return the founded  T , If no T were
        * found in database return  null.
        */
        T findByIdWithAssociatedList(I id);


        /**
        * delete T from database
        *
        * @param id - id of T to be deleted
        */
        int deleteById(I id);

        /**
        * find list of entities to be saved (save or update) and the list to be deleted
        *
        * @param oldList - list of old data (get from the db)
        * @param newList - list of new data (get from the GUI)
        * @return list that contains two lists encapsulated in a list
        */
        List<List<T>> getToBeSavedAndToBeDeleted(List<T> oldList, List<T> newList);

        /**
        * save T in database
        *
        * @param entity - T to be saved
        * @return the saved T, If the T can't be saved return null.
        */
        T save(T entity);

        /**
        * save list T in database
        *
        * @param list - list of T to be saved
        * @return the saved T list
        */
        List<T> save(List<T> list);

        /**
        * update T in database
        *
        * @param T - T to be updated
        * @return the updated T, If the T can't be updated return null.
        */
        T update(T T);

        /**
        * delete T from database
        *
        * @param T - T to be deleted
        * @return 1 if T deleted successfully, If the T can't be deleted return negative int
        */
        int delete(T T);

        /**
        * search for T in by some criteria
        *
        * @return the searhed list T
        */
        List<T> findByCriteria(V vo);

        /**
        * delete  list of T
        */
        void delete(List<T> list);

        /**
        * update liste of  T
        */
        void update(List<T> list);

}
