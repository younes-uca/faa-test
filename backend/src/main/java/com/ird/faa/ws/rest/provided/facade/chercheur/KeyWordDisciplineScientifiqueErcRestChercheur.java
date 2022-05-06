package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.KeyWordDisciplineScientifiqueErcChercheurService;

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
import com.ird.faa.bean.KeyWordDisciplineScientifiqueErc;
import com.ird.faa.ws.rest.provided.converter.KeyWordDisciplineScientifiqueErcConverter;
import com.ird.faa.ws.rest.provided.vo.KeyWordDisciplineScientifiqueErcVo;

@Api("Manages keyWordDisciplineScientifiqueErc services")
@RestController
@RequestMapping("api/chercheur/keyWordDisciplineScientifiqueErc")
public class KeyWordDisciplineScientifiqueErcRestChercheur {

@Autowired
private KeyWordDisciplineScientifiqueErcChercheurService keyWordDisciplineScientifiqueErcService;

@Autowired
private KeyWordDisciplineScientifiqueErcConverter keyWordDisciplineScientifiqueErcConverter;


            @ApiOperation("Updates the specified  keyWordDisciplineScientifiqueErc")
            @PutMapping("/")
            public  KeyWordDisciplineScientifiqueErcVo update(@RequestBody  KeyWordDisciplineScientifiqueErcVo  keyWordDisciplineScientifiqueErcVo){
            KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc = keyWordDisciplineScientifiqueErcConverter.toItem(keyWordDisciplineScientifiqueErcVo);
            keyWordDisciplineScientifiqueErc = keyWordDisciplineScientifiqueErcService.update(keyWordDisciplineScientifiqueErc);
            return keyWordDisciplineScientifiqueErcConverter.toVo(keyWordDisciplineScientifiqueErc);
            }

    @ApiOperation("Finds a list of all keyWordDisciplineScientifiqueErcs")
    @GetMapping("/")
    public List<KeyWordDisciplineScientifiqueErcVo> findAll(){
        return keyWordDisciplineScientifiqueErcConverter.toVo(keyWordDisciplineScientifiqueErcService.findAll());
    }

    @ApiOperation("Finds a keyWordDisciplineScientifiqueErc with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public KeyWordDisciplineScientifiqueErcVo findByIdWithAssociatedList(@PathVariable Long id){
    return keyWordDisciplineScientifiqueErcConverter.toVo(keyWordDisciplineScientifiqueErcService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search keyWordDisciplineScientifiqueErc by a specific criteria")
    @PostMapping("/search")
    public List<KeyWordDisciplineScientifiqueErcVo> findByCriteria(@RequestBody KeyWordDisciplineScientifiqueErcVo keyWordDisciplineScientifiqueErcVo){
        return keyWordDisciplineScientifiqueErcConverter.toVo(keyWordDisciplineScientifiqueErcService.findByCriteria(keyWordDisciplineScientifiqueErcVo));
        }

            @ApiOperation("Finds a keyWordDisciplineScientifiqueErc by id")
            @GetMapping("/id/{id}")
            public KeyWordDisciplineScientifiqueErcVo findById(@PathVariable Long id){
            return keyWordDisciplineScientifiqueErcConverter.toVo(keyWordDisciplineScientifiqueErcService.findById(id));
            }

            @ApiOperation("Saves the specified  keyWordDisciplineScientifiqueErc")
            @PostMapping("/")
            public KeyWordDisciplineScientifiqueErcVo save(@RequestBody KeyWordDisciplineScientifiqueErcVo keyWordDisciplineScientifiqueErcVo){
            KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc = keyWordDisciplineScientifiqueErcConverter.toItem(keyWordDisciplineScientifiqueErcVo);
            keyWordDisciplineScientifiqueErc = keyWordDisciplineScientifiqueErcService.save(keyWordDisciplineScientifiqueErc);
            return keyWordDisciplineScientifiqueErcConverter.toVo(keyWordDisciplineScientifiqueErc);
            }

            @ApiOperation("Delete the specified keyWordDisciplineScientifiqueErc")
            @DeleteMapping("/")
            public int delete(@RequestBody KeyWordDisciplineScientifiqueErcVo keyWordDisciplineScientifiqueErcVo){
            KeyWordDisciplineScientifiqueErc keyWordDisciplineScientifiqueErc = keyWordDisciplineScientifiqueErcConverter.toItem(keyWordDisciplineScientifiqueErcVo);
            return keyWordDisciplineScientifiqueErcService.delete(keyWordDisciplineScientifiqueErc);
            }

            @ApiOperation("Deletes a keyWordDisciplineScientifiqueErc by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return keyWordDisciplineScientifiqueErcService.deleteById(id);
            }
        @ApiOperation("find by keyWord code")
        @GetMapping("/keyWord/code/{code}")
        public List<KeyWordDisciplineScientifiqueErc> findByKeyWordCode(@PathVariable String code){
        return keyWordDisciplineScientifiqueErcService.findByKeyWordCode(code);
        }

        @ApiOperation("delete by keyWord code")
        @DeleteMapping("/keyWord/code/{code}")
        public int deleteByKeyWordCode(@PathVariable String code){
        return keyWordDisciplineScientifiqueErcService.deleteByKeyWordCode(code);
        }

        @ApiOperation("find by keyWord id")
        @GetMapping("/keyWord/id/{id}")
        public List<KeyWordDisciplineScientifiqueErc> findByKeyWordId(@PathVariable Long id){
        return keyWordDisciplineScientifiqueErcService.findByKeyWordId(id);
        }

        @ApiOperation("delete by keyWord id")
        @DeleteMapping("/keyWord/id/{id}")
        public int deleteByKeyWordId(@PathVariable Long id){
        return keyWordDisciplineScientifiqueErcService.deleteByKeyWordId(id);
        }

        @ApiOperation("find by disciplineScientifique code")
        @GetMapping("/disciplineScientifique/code/{code}")
        public List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueCode(@PathVariable String code){
        return keyWordDisciplineScientifiqueErcService.findByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("delete by disciplineScientifique code")
        @DeleteMapping("/disciplineScientifique/code/{code}")
        public int deleteByDisciplineScientifiqueCode(@PathVariable String code){
        return keyWordDisciplineScientifiqueErcService.deleteByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("find by disciplineScientifique id")
        @GetMapping("/disciplineScientifique/id/{id}")
        public List<KeyWordDisciplineScientifiqueErc> findByDisciplineScientifiqueId(@PathVariable Long id){
        return keyWordDisciplineScientifiqueErcService.findByDisciplineScientifiqueId(id);
        }

        @ApiOperation("delete by disciplineScientifique id")
        @DeleteMapping("/disciplineScientifique/id/{id}")
        public int deleteByDisciplineScientifiqueId(@PathVariable Long id){
        return keyWordDisciplineScientifiqueErcService.deleteByDisciplineScientifiqueId(id);
        }



            }
