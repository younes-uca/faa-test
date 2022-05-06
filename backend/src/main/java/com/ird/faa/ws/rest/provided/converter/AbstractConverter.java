package  com.ird.faa.ws.rest.provided.converter;


import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

public abstract class AbstractConverter<T,V> {

    public abstract T toItem(V vo);

    public abstract V toVo(T item);

    public List<T> toItem(List<V> vos) {
        if (vos == null || vos.isEmpty()) {
        return Collections.emptyList();
        } else {
            List<T> items = new ArrayList();
            for (V vo : vos) {
                items.add(toItem(vo));
            }
            return items;
        }
    }

    public List<V> toVo(List<T> items) {
        if (items == null || items.isEmpty()) {
            return Collections.emptyList();
        } else {
            List<V> vos = new ArrayList();
            for (T item : items) {
                vos.add(toVo(item));
            }
            return vos;
        }
    }

}
