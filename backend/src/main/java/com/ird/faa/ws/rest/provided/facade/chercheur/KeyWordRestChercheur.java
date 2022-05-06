package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.KeyWordChercheurService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.KeyWord;
import com.ird.faa.ws.rest.provided.converter.KeyWordConverter;
import com.ird.faa.ws.rest.provided.vo.KeyWordVo;

@Api("Manages keyWord services")
@RestController
@RequestMapping("api/chercheur/keyWord")
public class KeyWordRestChercheur {

@Autowired
private KeyWordChercheurService keyWordService;

@Autowired
private KeyWordConverter keyWordConverter;


            @ApiOperation("Updates the specified  keyWord")
            @PutMapping("/")
            public  KeyWordVo update(@RequestBody  KeyWordVo  keyWordVo){
            KeyWord keyWord = keyWordConverter.toItem(keyWordVo);
            keyWord = keyWordService.update(keyWord);
            return keyWordConverter.toVo(keyWord);
            }

    @ApiOperation("Finds a list of all keyWords")
    @GetMapping("/")
    public List<KeyWordVo> findAll(){
        return keyWordConverter.toVo(keyWordService.findAll());
    }

    @ApiOperation("Finds a keyWord with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public KeyWordVo findByIdWithAssociatedList(@PathVariable Long id){
    return keyWordConverter.toVo(keyWordService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search keyWord by a specific criteria")
    @PostMapping("/search")
    public List<KeyWordVo> findByCriteria(@RequestBody KeyWordVo keyWordVo){
        return keyWordConverter.toVo(keyWordService.findByCriteria(keyWordVo));
        }

            @ApiOperation("Finds a keyWord by id")
            @GetMapping("/id/{id}")
            public KeyWordVo findById(@PathVariable Long id){
            return keyWordConverter.toVo(keyWordService.findById(id));
            }

            @ApiOperation("Saves the specified  keyWord")
            @PostMapping("/")
            public KeyWordVo save(@RequestBody KeyWordVo keyWordVo){
            KeyWord keyWord = keyWordConverter.toItem(keyWordVo);
            keyWord = keyWordService.save(keyWord);
            return keyWordConverter.toVo(keyWord);
            }

            @ApiOperation("Delete the specified keyWord")
            @DeleteMapping("/")
            public int delete(@RequestBody KeyWordVo keyWordVo){
            KeyWord keyWord = keyWordConverter.toItem(keyWordVo);
            return keyWordService.delete(keyWord);
            }

            @ApiOperation("Deletes a keyWord by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return keyWordService.deleteById(id);
            }


            }
