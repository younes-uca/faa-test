package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.CampagneChercheurService;

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
import com.ird.faa.bean.Campagne;
import com.ird.faa.ws.rest.provided.converter.CampagneConverter;
import com.ird.faa.ws.rest.provided.vo.CampagneVo;

@Api("Manages campagne services")
@RestController
@RequestMapping("api/chercheur/campagne")
public class CampagneRestChercheur {

@Autowired
private CampagneChercheurService campagneService;

@Autowired
private CampagneConverter campagneConverter;


            @ApiOperation("Updates the specified  campagne")
            @PutMapping("/")
            public  CampagneVo update(@RequestBody  CampagneVo  campagneVo){
            Campagne campagne = campagneConverter.toItem(campagneVo);
            campagne = campagneService.update(campagne);
            return campagneConverter.toVo(campagne);
            }

    @ApiOperation("Finds a list of all campagnes")
    @GetMapping("/")
    public List<CampagneVo> findAll(){
        return campagneConverter.toVo(campagneService.findAll());
    }

    @ApiOperation("Finds a campagne with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public CampagneVo findByIdWithAssociatedList(@PathVariable Long id){
    return campagneConverter.toVo(campagneService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search campagne by a specific criteria")
    @PostMapping("/search")
    public List<CampagneVo> findByCriteria(@RequestBody CampagneVo campagneVo){
        return campagneConverter.toVo(campagneService.findByCriteria(campagneVo));
        }

            @ApiOperation("Finds a campagne by id")
            @GetMapping("/id/{id}")
            public CampagneVo findById(@PathVariable Long id){
            return campagneConverter.toVo(campagneService.findById(id));
            }

            @ApiOperation("Saves the specified  campagne")
            @PostMapping("/")
            public CampagneVo save(@RequestBody CampagneVo campagneVo){
            Campagne campagne = campagneConverter.toItem(campagneVo);
            campagne = campagneService.save(campagne);
            return campagneConverter.toVo(campagne);
            }

            @ApiOperation("Delete the specified campagne")
            @DeleteMapping("/")
            public int delete(@RequestBody CampagneVo campagneVo){
            Campagne campagne = campagneConverter.toItem(campagneVo);
            return campagneService.delete(campagne);
            }

            @ApiOperation("Deletes a campagne by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return campagneService.deleteById(id);
            }
        @ApiOperation("Search campagneChercheur by a specific chercheur and code ")
        @GetMapping("/searchByChercheurUsername/{username}")
        public CampagneVo findProgressCampagneByChercheurUsername(@PathVariable String username){
            return campagneConverter.toVo(campagneService.findProgressCampagneByChercheurUsername(username));
            }


            }
