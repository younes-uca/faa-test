package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.EnjeuxIrdChercheurAdminService;

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
import com.ird.faa.bean.EnjeuxIrdChercheur;
import com.ird.faa.ws.rest.provided.converter.EnjeuxIrdChercheurConverter;
import com.ird.faa.ws.rest.provided.vo.EnjeuxIrdChercheurVo;

@Api("Manages enjeuxIrdChercheur services")
@RestController
@RequestMapping("api/admin/enjeuxIrdChercheur")
public class EnjeuxIrdChercheurRestAdmin {

@Autowired
private EnjeuxIrdChercheurAdminService enjeuxIrdChercheurService;

@Autowired
private EnjeuxIrdChercheurConverter enjeuxIrdChercheurConverter;


            @ApiOperation("Updates the specified  enjeuxIrdChercheur")
            @PutMapping("/")
            public  EnjeuxIrdChercheurVo update(@RequestBody  EnjeuxIrdChercheurVo  enjeuxIrdChercheurVo){
            EnjeuxIrdChercheur enjeuxIrdChercheur = enjeuxIrdChercheurConverter.toItem(enjeuxIrdChercheurVo);
            enjeuxIrdChercheur = enjeuxIrdChercheurService.update(enjeuxIrdChercheur);
            return enjeuxIrdChercheurConverter.toVo(enjeuxIrdChercheur);
            }

    @ApiOperation("Finds a list of all enjeuxIrdChercheurs")
    @GetMapping("/")
    public List<EnjeuxIrdChercheurVo> findAll(){
        return enjeuxIrdChercheurConverter.toVo(enjeuxIrdChercheurService.findAll());
    }

    @ApiOperation("Finds a enjeuxIrdChercheur with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EnjeuxIrdChercheurVo findByIdWithAssociatedList(@PathVariable Long id){
    return enjeuxIrdChercheurConverter.toVo(enjeuxIrdChercheurService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search enjeuxIrdChercheur by a specific criteria")
    @PostMapping("/search")
    public List<EnjeuxIrdChercheurVo> findByCriteria(@RequestBody EnjeuxIrdChercheurVo enjeuxIrdChercheurVo){
        return enjeuxIrdChercheurConverter.toVo(enjeuxIrdChercheurService.findByCriteria(enjeuxIrdChercheurVo));
        }

            @ApiOperation("Finds a enjeuxIrdChercheur by id")
            @GetMapping("/id/{id}")
            public EnjeuxIrdChercheurVo findById(@PathVariable Long id){
            return enjeuxIrdChercheurConverter.toVo(enjeuxIrdChercheurService.findById(id));
            }

            @ApiOperation("Saves the specified  enjeuxIrdChercheur")
            @PostMapping("/")
            public EnjeuxIrdChercheurVo save(@RequestBody EnjeuxIrdChercheurVo enjeuxIrdChercheurVo){
            EnjeuxIrdChercheur enjeuxIrdChercheur = enjeuxIrdChercheurConverter.toItem(enjeuxIrdChercheurVo);
            enjeuxIrdChercheur = enjeuxIrdChercheurService.save(enjeuxIrdChercheur);
            return enjeuxIrdChercheurConverter.toVo(enjeuxIrdChercheur);
            }

            @ApiOperation("Delete the specified enjeuxIrdChercheur")
            @DeleteMapping("/")
            public int delete(@RequestBody EnjeuxIrdChercheurVo enjeuxIrdChercheurVo){
            EnjeuxIrdChercheur enjeuxIrdChercheur = enjeuxIrdChercheurConverter.toItem(enjeuxIrdChercheurVo);
            return enjeuxIrdChercheurService.delete(enjeuxIrdChercheur);
            }

            @ApiOperation("Deletes a enjeuxIrdChercheur by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return enjeuxIrdChercheurService.deleteById(id);
            }
        @ApiOperation("find by enjeuxIrd code")
        @GetMapping("/enjeuxIrd/code/{code}")
        public List<EnjeuxIrdChercheur> findByEnjeuxIrdCode(@PathVariable String code){
        return enjeuxIrdChercheurService.findByEnjeuxIrdCode(code);
        }

        @ApiOperation("delete by enjeuxIrd code")
        @DeleteMapping("/enjeuxIrd/code/{code}")
        public int deleteByEnjeuxIrdCode(@PathVariable String code){
        return enjeuxIrdChercheurService.deleteByEnjeuxIrdCode(code);
        }

        @ApiOperation("find by enjeuxIrd id")
        @GetMapping("/enjeuxIrd/id/{id}")
        public List<EnjeuxIrdChercheur> findByEnjeuxIrdId(@PathVariable Long id){
        return enjeuxIrdChercheurService.findByEnjeuxIrdId(id);
        }

        @ApiOperation("delete by enjeuxIrd id")
        @DeleteMapping("/enjeuxIrd/id/{id}")
        public int deleteByEnjeuxIrdId(@PathVariable Long id){
        return enjeuxIrdChercheurService.deleteByEnjeuxIrdId(id);
        }

        @ApiOperation("find by chercheur numeroMatricule")
        @GetMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public List<EnjeuxIrdChercheur> findByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return enjeuxIrdChercheurService.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("delete by chercheur numeroMatricule")
        @DeleteMapping("/chercheur/numeroMatricule/{numeroMatricule}")
        public int deleteByChercheurNumeroMatricule(@PathVariable String numeroMatricule){
        return enjeuxIrdChercheurService.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @ApiOperation("find by chercheur id")
        @GetMapping("/chercheur/id/{id}")
        public List<EnjeuxIrdChercheur> findByChercheurId(@PathVariable Long id){
        return enjeuxIrdChercheurService.findByChercheurId(id);
        }

        @ApiOperation("delete by chercheur id")
        @DeleteMapping("/chercheur/id/{id}")
        public int deleteByChercheurId(@PathVariable Long id){
        return enjeuxIrdChercheurService.deleteByChercheurId(id);
        }



            }
