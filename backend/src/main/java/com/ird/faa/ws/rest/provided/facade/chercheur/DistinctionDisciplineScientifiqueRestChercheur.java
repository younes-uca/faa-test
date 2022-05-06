package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.DistinctionDisciplineScientifiqueChercheurService;

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
import com.ird.faa.bean.DistinctionDisciplineScientifique;
import com.ird.faa.ws.rest.provided.converter.DistinctionDisciplineScientifiqueConverter;
import com.ird.faa.ws.rest.provided.vo.DistinctionDisciplineScientifiqueVo;

@Api("Manages distinctionDisciplineScientifique services")
@RestController
@RequestMapping("api/chercheur/distinctionDisciplineScientifique")
public class DistinctionDisciplineScientifiqueRestChercheur {

@Autowired
private DistinctionDisciplineScientifiqueChercheurService distinctionDisciplineScientifiqueService;

@Autowired
private DistinctionDisciplineScientifiqueConverter distinctionDisciplineScientifiqueConverter;


            @ApiOperation("Updates the specified  distinctionDisciplineScientifique")
            @PutMapping("/")
            public  DistinctionDisciplineScientifiqueVo update(@RequestBody  DistinctionDisciplineScientifiqueVo  distinctionDisciplineScientifiqueVo){
            DistinctionDisciplineScientifique distinctionDisciplineScientifique = distinctionDisciplineScientifiqueConverter.toItem(distinctionDisciplineScientifiqueVo);
            distinctionDisciplineScientifique = distinctionDisciplineScientifiqueService.update(distinctionDisciplineScientifique);
            return distinctionDisciplineScientifiqueConverter.toVo(distinctionDisciplineScientifique);
            }

    @ApiOperation("Finds a list of all distinctionDisciplineScientifiques")
    @GetMapping("/")
    public List<DistinctionDisciplineScientifiqueVo> findAll(){
        return distinctionDisciplineScientifiqueConverter.toVo(distinctionDisciplineScientifiqueService.findAll());
    }

    @ApiOperation("Finds a distinctionDisciplineScientifique with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DistinctionDisciplineScientifiqueVo findByIdWithAssociatedList(@PathVariable Long id){
    return distinctionDisciplineScientifiqueConverter.toVo(distinctionDisciplineScientifiqueService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search distinctionDisciplineScientifique by a specific criteria")
    @PostMapping("/search")
    public List<DistinctionDisciplineScientifiqueVo> findByCriteria(@RequestBody DistinctionDisciplineScientifiqueVo distinctionDisciplineScientifiqueVo){
        return distinctionDisciplineScientifiqueConverter.toVo(distinctionDisciplineScientifiqueService.findByCriteria(distinctionDisciplineScientifiqueVo));
        }

            @ApiOperation("Finds a distinctionDisciplineScientifique by id")
            @GetMapping("/id/{id}")
            public DistinctionDisciplineScientifiqueVo findById(@PathVariable Long id){
            return distinctionDisciplineScientifiqueConverter.toVo(distinctionDisciplineScientifiqueService.findById(id));
            }

            @ApiOperation("Saves the specified  distinctionDisciplineScientifique")
            @PostMapping("/")
            public DistinctionDisciplineScientifiqueVo save(@RequestBody DistinctionDisciplineScientifiqueVo distinctionDisciplineScientifiqueVo){
            DistinctionDisciplineScientifique distinctionDisciplineScientifique = distinctionDisciplineScientifiqueConverter.toItem(distinctionDisciplineScientifiqueVo);
            distinctionDisciplineScientifique = distinctionDisciplineScientifiqueService.save(distinctionDisciplineScientifique);
            return distinctionDisciplineScientifiqueConverter.toVo(distinctionDisciplineScientifique);
            }

            @ApiOperation("Delete the specified distinctionDisciplineScientifique")
            @DeleteMapping("/")
            public int delete(@RequestBody DistinctionDisciplineScientifiqueVo distinctionDisciplineScientifiqueVo){
            DistinctionDisciplineScientifique distinctionDisciplineScientifique = distinctionDisciplineScientifiqueConverter.toItem(distinctionDisciplineScientifiqueVo);
            return distinctionDisciplineScientifiqueService.delete(distinctionDisciplineScientifique);
            }

            @ApiOperation("Deletes a distinctionDisciplineScientifique by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return distinctionDisciplineScientifiqueService.deleteById(id);
            }
        @ApiOperation("find by distinction id")
        @GetMapping("/distinction/id/{id}")
        public List<DistinctionDisciplineScientifique> findByDistinctionId(@PathVariable Long id){
        return distinctionDisciplineScientifiqueService.findByDistinctionId(id);
        }

        @ApiOperation("delete by distinction id")
        @DeleteMapping("/distinction/id/{id}")
        public int deleteByDistinctionId(@PathVariable Long id){
        return distinctionDisciplineScientifiqueService.deleteByDistinctionId(id);
        }

        @ApiOperation("find by disciplineScientifique code")
        @GetMapping("/disciplineScientifique/code/{code}")
        public List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueCode(@PathVariable String code){
        return distinctionDisciplineScientifiqueService.findByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("delete by disciplineScientifique code")
        @DeleteMapping("/disciplineScientifique/code/{code}")
        public int deleteByDisciplineScientifiqueCode(@PathVariable String code){
        return distinctionDisciplineScientifiqueService.deleteByDisciplineScientifiqueCode(code);
        }

        @ApiOperation("find by disciplineScientifique id")
        @GetMapping("/disciplineScientifique/id/{id}")
        public List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueId(@PathVariable Long id){
        return distinctionDisciplineScientifiqueService.findByDisciplineScientifiqueId(id);
        }

        @ApiOperation("delete by disciplineScientifique id")
        @DeleteMapping("/disciplineScientifique/id/{id}")
        public int deleteByDisciplineScientifiqueId(@PathVariable Long id){
        return distinctionDisciplineScientifiqueService.deleteByDisciplineScientifiqueId(id);
        }



            }
